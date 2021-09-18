import { Component, OnInit, ViewChild, ɵCompiler_compileModuleSync__POST_R3__ } from '@angular/core';
import { Location, ViewportScroller, LocationStrategy } from '@angular/common';
import { Router, ActivatedRoute, RoutesRecognized } from '@angular/router';
import { ModalController, ActionSheetController, ToastController, IonContent, Platform, AlertController } from '@ionic/angular';
import { Camera, CameraResultType } from '@capacitor/camera';
import { forkJoin, from, Observable, Subscription } from 'rxjs';
import { filter, tap, map, concatMap, toArray, pairwise } from 'rxjs/operators';
import { TaskDetailLogic } from './logic/task-detail.logic';
import { AddTaskModalComponent } from 'src/app/shared/component/modal/add-task-modal/add-task-modal.component';
import { GetTaskQuery, ListRoomGroupsQuery } from 'src/app/shared/service/amplify.service';
import { IMessageWithAttachUrl, CurrentUser } from './models/task-detail.interface';
import { TaskPage } from '../task/task.page';

interface Attribute {
  name: string,
  email: string,
  email_verified: boolean,
  sub: string,
};
@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.page.html',
  styleUrls: ['./task-detail.page.scss'],
})
export class TaskDetailPage implements OnInit {
  @ViewChild('comment') child: HTMLElement;
  @ViewChild(IonContent, { static: false }) content: IonContent;
  @ViewChild(TaskPage) taskPage: TaskPage;
  taskId: string;
  segment: string;
  taskDetail: GetTaskQuery;
  message: Array<IMessageWithAttachUrl>;
  currentUserId: string;
  roomMembers: Array<ListRoomGroupsQuery>;
  arrayImageBase64Data: Array<string> = [];
  subscriptionMessage: Subscription;
  link = "comment"
  fragmentComment = '';
  newMsg: string = '';
  private previousUrl: string = undefined;
  private previousParam: string = undefined;

  currentUserAttribute: Attribute;
  currentUserInfo: CurrentUser;

  constructor(
    private logic: TaskDetailLogic,
    private readonly scroll: ViewportScroller,
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private readonly location: Location,
    private readonly modalCtrl: ModalController,
    private readonly actionSheetCtrl: ActionSheetController,
    private readonly toastCtrl: ToastController,
    private readonly platform: Platform,
    private readonly alertCtrl: AlertController,
    private readonly locationStrate: LocationStrategy,
  ) {
    this.segment = this.route.snapshot.paramMap.get('segment');

    let resultMessage;
    this.taskId = this.route.snapshot.paramMap.get('id');
    this.initializeApp().subscribe(() => {
      this.subscriptionMessage = this.logic.onCreateMessageListener()
        .subscribe({
          next: () => this.logic.fetchMessagePerTask(this.taskId)
            .pipe(map((result) => resultMessage = result.items))
            .pipe(concatMap(() => this.logic.makeMessageAuthorImageUrl(resultMessage)))
            .pipe(concatMap((result) => this.logic.makeAttachmentUrl(result)))
            .pipe(concatMap((arrayAttachment) => this.logic.modifiedMessageItems(arrayAttachment, resultMessage)))
            .subscribe((items) => {
              this.message = items
            }),
        });
    });
    this.router.events
      .pipe(filter((event: any) => event instanceof RoutesRecognized), pairwise())
      .subscribe((event: any) => {
        this.previousUrl = event[0].urlAfterRedirects;
      });
    this.locationStrate.onPopState(() => {
      // システムの戻るボタンクリック時の挙動
    })
  }

  // 前のURLだけを取得
  public getPreviousParam() {
    return this.previousParam;
  }

  ngOnInit(): void {
    let resultMessage;
    this.segment = this.route.snapshot.paramMap.get('segment');
    const observerFetchCurrentUserInfo = this.logic.fetchCurrentUserInfo()
      .pipe(map((data) => this.currentUserAttribute = data))
      .pipe(concatMap(() => this.logic.fetchAnyUserInfoFromList(this.currentUserAttribute.email)))
    const observerFetchAnyTask = this.logic.fetchAnyTask(this.taskId)
      .pipe(map((data) => this.taskDetail = data))
      .pipe(concatMap(() => this.logic.fetchMemberListOnRoom(this.taskDetail.roomID)));
    const observerFetchMessagePerTask = this.logic.fetchMessagePerTask(this.taskId);
    const observerMakeMessageAttachmentUrl = observerFetchMessagePerTask
      .pipe(map((result) => resultMessage = result.items))
      .pipe(concatMap((result) => this.logic.makeMessageAuthorImageUrl(result))) //AuthorIconのURLを設定する
      .pipe(concatMap((result) => this.logic.makeAttachmentUrl(result)))
      .pipe(concatMap((arrayAttachment) => this.logic.modifiedMessageItems(arrayAttachment, resultMessage)))

    forkJoin({
      currentUserInfo: observerFetchCurrentUserInfo,
      anyTask: observerFetchAnyTask,
      messageAttachment: observerMakeMessageAttachmentUrl,
    }).subscribe((result) => {
      this.currentUserInfo = result.currentUserInfo[0];
      this.roomMembers = result.anyTask.items;
      this.message = result.messageAttachment;
    });
  }

  sendMessage(): void {
    if (this.arrayImageBase64Data.length === 0) {
      this.logic.sendNewMessage(this.taskId, this.newMsg, this.currentUserInfo.id)
        .subscribe(() => this.newMsg = '');
    } else {
      this.logic.uploadFile(this.arrayImageBase64Data, this.taskId, this.currentUserInfo.id)
        .pipe(concatMap(({ key }) => this.logic.makeS3Object(key)))
        .pipe(toArray())
        .pipe(concatMap((imageContent) => this.logic.sendNewMessage(this.taskId, this.newMsg, this.currentUserInfo.id, imageContent)))
        .subscribe(() => {
          this.newMsg = '';
          this.arrayImageBase64Data = [];
        });
    }
  }

  async presentDoneToast(): Promise<void> {
    const toast = await this.toastCtrl.create({
      message: 'おつかれさまでした！',
      duration: 2000
    });
    toast.present();
  }

  async presentMoveTask(): Promise<void> {
    const toast = await this.toastCtrl.create({
      message: '再度、戻しました。',
      duration: 2000
    });
    toast.present();
  }

  ngAfterViewInit(): void {
    this.route.fragment.subscribe((result) => {
      this.scroll.scrollToAnchor(result);
    });
  }

  async presentModalEditTask(taskDetail: GetTaskQuery): Promise<void> {
    const modal = await this.modalCtrl.create({
      component: AddTaskModalComponent,
      componentProps: {
        taskDetail: taskDetail,
        roomMembers: this.roomMembers,
      },
    });
    const dismissObservable = from(modal.onDidDismiss());
    let resultObj;
    dismissObservable
      .pipe(filter(({ data }) => data !== undefined))
      .pipe(map((data) => resultObj = data))
      .pipe(concatMap(({ data }) => this.logic.updateTaskToRoom(data.taskValue, this.taskId)))
      .pipe(concatMap((result) => this.logic.createMessage(result, resultObj)))
      .pipe(concatMap(() => this.logic.fetchAnyTask(this.taskId)))
      .subscribe((data) => {
        this.taskDetail = data;
      });
    return modal.present();
  }

  doneTask(taskDetail: GetTaskQuery): void {
    const presentToast = this.presentDoneToast();
    const messageContent = 'このタスクを完了としました';
    this.logic.updateTaskItem(taskDetail, 10)
      .pipe(concatMap((data) => this.logic.createMessage(data, messageContent)))
      .pipe(concatMap(() => this.logic.fetchAnyTask(taskDetail.id)))
      .pipe(tap(() => presentToast))
      .subscribe((data) => {
        this.taskDetail = data;
        this.segment = 'done';
      });
  }

  moveTask(taskDetail: GetTaskQuery): void {
    const presentToast = from(this.presentMoveTask());
    const messageContent = 'このタスクをActiveにもどしました。';
    this.logic.updateTaskItem(taskDetail, 0)
      .pipe(concatMap((result) => this.logic.createMessage(result, messageContent)))
      .pipe(concatMap(() => this.logic.fetchAnyTask(taskDetail.id)))
      .pipe(tap(() => presentToast))
      .subscribe((data) => {
        this.taskDetail = data;
        this.segment = 'active';
      });
  }

  async presentActionSheet(taskDetail: GetTaskQuery): Promise<void> {
    const activeActionSheet = await this.actionSheetCtrl.create({
      cssClass: 'my-custom-class',
      buttons: [
        {
          text: '完了',
          handler: () => {
            this.doneTask(taskDetail);
          }
        },
        {
          text: 'キャンセル',
          role: 'cancel',
        }
      ]
    });

    const doneActionSheet = await this.actionSheetCtrl.create({
      cssClass: 'my-custom-class',
      buttons: [
        {
          text: 'Activeに移動',
          handler: () => {
            this.moveTask(taskDetail);
          }
        },
        {
          text: 'キャンセル',
          role: 'cancel',
        }
      ]
    });

    if (this.segment === 'active') {
      await activeActionSheet.present();
    } else if (this.segment === 'done') {
      await doneActionSheet.present();
    }
  }

  goBackToRoom(): void {
    this.location.back();
  }

  selectFile(): void { }

  async takePhoto(): Promise<void> {
    const image = await Camera.getPhoto({
      quality: 50,
      allowEditing: true,
      resultType: CameraResultType.DataUrl,
      promptLabelHeader: 'カメラ',
      promptLabelCancel: 'キャンセル',
      promptLabelPhoto: 'ライブラリから',
      promptLabelPicture: 'カメラ'
    });
    this.arrayImageBase64Data.push(image.dataUrl);
  }

  initializeApp(): Observable<string> {
    return from(this.platform.ready());
  }

  deleteImage(indexTarget: number): void {
    this.arrayImageBase64Data.splice(indexTarget, 1);
  }

  async presentAlert(): Promise<void> {
    const alert = await this.alertCtrl.create({
      header: 'アップロード最大値です',
      message: '一度にアップロードできる数は一件です',
      buttons: ['了解']
    });
    await alert.present();
  }

  ngOnDestroy(): void {
    this.subscriptionMessage.unsubscribe();
  }
}
