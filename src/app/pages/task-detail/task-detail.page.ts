import { Component, OnInit, ViewChild } from '@angular/core';
import { Location, ViewportScroller } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ModalController, ActionSheetController, ToastController, IonContent, Platform, AlertController } from '@ionic/angular';
import { Plugins, CameraResultType } from '@capacitor/core';
import { forkJoin, from, Observable, Subscription } from 'rxjs';
import { TaskDetailLogic } from './logic/task-detail.logic';
import { AddTaskModalComponent } from 'src/app/shared/component/modal/add-task-modal/add-task-modal.component';
import { filter, tap, map, concatMap, toArray, mergeMap } from 'rxjs/operators';
import { GetTaskQuery, ListRoomGroupsQuery, Message } from 'src/app/shared/service/amplify.service';
import { IMessageWithAttachUrl } from './models/task-detail.interface';
const { Camera } = Plugins;

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.page.html',
  styleUrls: ['./task-detail.page.scss'],
})
export class TaskDetailPage implements OnInit {
  @ViewChild('comment') child: HTMLElement;
  @ViewChild(IonContent, { static: false }) content: IonContent;
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

  constructor(
    private logic: TaskDetailLogic,
    private readonly scroll: ViewportScroller,
    private readonly route: ActivatedRoute,
    private readonly location: Location,
    private readonly modalCtrl: ModalController,
    private readonly actionSheetCtrl: ActionSheetController,
    private readonly toastCtrl: ToastController,
    private readonly platform: Platform,
    private readonly alertCtrl: AlertController,
  ) {
    this.initializeApp().subscribe(() => {
      this.subscriptionMessage = this.logic.onCreateMessageListener()
        .subscribe({
          next: () => this.logic.fetchMessagePerTask(this.taskId).subscribe(({ items }) => {
            this.message = items
          }),
        });
    });
  }

  ngOnInit(): void {
    this.taskId = this.route.snapshot.paramMap.get('id');
    this.segment = this.route.snapshot.paramMap.get('segment');
    let resultMessage;
    const observerFetchCurrentUserInfo = this.logic.fetchCurrentUserInfo();
    const observerFetchAnyTask = this.logic.fetchAnyTask(this.taskId)
      .pipe(map((data) => this.taskDetail = data))
      .pipe(concatMap(() => this.logic.fetchMemberListOnRoom(this.taskDetail.roomID)));
    const observerFetchMessagePerTask = this.logic.fetchMessagePerTask(this.taskId);
    const observerMakeMessageAttachmentUrl = observerFetchMessagePerTask
      .pipe(map(result => resultMessage = result))
      .pipe(mergeMap((result) => this.logic.makeAttachmentUrl(result.items)))
      .pipe(mergeMap((arrayAttachment) => this.logic.modifiedMessageItems(arrayAttachment, resultMessage.items)))

    forkJoin({
      currentUserInfo: observerFetchCurrentUserInfo,
      anyTask: observerFetchAnyTask,
      messagePerTask: observerFetchMessagePerTask,
      messageAttachment: observerMakeMessageAttachmentUrl,
    }).subscribe((result) => {
      this.currentUserId = result.currentUserInfo.sub;
      this.roomMembers = result.anyTask.items;
      this.message = result.messagePerTask.items;
      console.log('messageAttachment', result.messageAttachment);
    });
  }

  sendMessage(): void {
    if (this.arrayImageBase64Data.length === 0) {
      this.logic.sendNewMessage(this.taskId, this.newMsg, this.currentUserId)
        .subscribe(() => this.newMsg = '');
    } else {
      this.logic.uploadFile(this.arrayImageBase64Data, this.taskId, this.currentUserId)
        // ここで { bucket: string, region: string, key: string}の形に治す(配列にはしなくてもよい)
        .pipe(concatMap(({ key }) => this.logic.makeS3Object(key)))
        .pipe(toArray())
        .pipe(concatMap((imageContent) => this.logic.sendNewMessage(this.taskId, this.newMsg, this.currentUserId, imageContent)))
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

  async presentModalEditTask(taskDetail): Promise<void> {
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

  doneTask(taskDetail): void {
    const presentToast = from(this.presentDoneToast());
    const messageContent = 'このタスクを完了としました';
    this.logic.updateTaskItem(taskDetail, 10)
      .pipe(concatMap((data) => this.logic.createMessage(data, messageContent)))
      .pipe(concatMap(() => this.logic.fetchAnyTask(taskDetail.id)))
      .pipe(tap(() => presentToast))
      .subscribe((data) => {
        this.taskDetail = data;
      });
  }

  moveTask(taskDetail): void {
    const presentToast = from(this.presentMoveTask());
    const messageContent = 'このタスクをActiveにもどしました。\n 頑張ってください！';
    this.logic.updateTaskItem(taskDetail, 0)
      .pipe(concatMap((result) => this.logic.createMessage(result, messageContent)))
      .pipe(concatMap(() => this.logic.fetchAnyTask(taskDetail.id)))
      .pipe(tap(() => presentToast))
      .subscribe((data) => {
        this.taskDetail = data;
      });
  }

  async presentActionSheet(taskDetail): Promise<void> {
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
          text: '編集',
          handler: () => {
            this.presentModalEditTask(taskDetail)
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
    console.log('[arrayImageBase64Data]', this.arrayImageBase64Data);
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
