import { Component, OnInit, ViewChild } from '@angular/core';
import { Location, ViewportScroller } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { ModalController, ActionSheetController, ToastController, IonContent, Platform, AlertController } from '@ionic/angular';
import { Plugins, CameraResultType } from '@capacitor/core';
import { forkJoin, from, Observable } from 'rxjs';
import { TaskDetailLogic } from './logic/task-detail.logic';
import { AddTaskModalComponent } from 'src/app/shared/component/modal/add-task-modal/add-task-modal.component';
import { filter, tap, map, concatMap, toArray, catchError } from 'rxjs/operators';
import { CurrentUserInfo } from '../task/interface/current-user-info.interface';
import { ListRoomGroupsQuery } from 'src/app/API.service';
import { GetTaskQuery, ListMessagesQuery } from 'src/app/shared/service/amplify.service';
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
  link = "comment"
  fragmentComment = '';
  newMsg: string = '';
  message: ListMessagesQuery;
  currentUserId: string;
  roomMembers: Array<ListRoomGroupsQuery>;
  arrayImageBase64Data: Array<any> = [];

  constructor(
    private location: Location,
    private logic: TaskDetailLogic,
    private route: ActivatedRoute,
    private scroll: ViewportScroller,
    private modalCtrl: ModalController,
    private actionSheetCtrl: ActionSheetController,
    private toastCtrl: ToastController,
    private readonly platform: Platform,
    private readonly alertCtrl: AlertController,
  ) {
    this.initializeApp()
      .subscribe(() => {
        // this.logic.onCreateMessageListener()
        //   .subscribe(({ value }) => {
        //     if (!value.hasOwnProperty('errors')) {
        //       this.logic.fetchMessagePerTask(this.taskId)
        //         .subscribe((result) => {
        //           this.message = result.items
        //         })
        //     }
        //   });
      });
  }

  ngOnInit(): void {
    this.taskId = this.route.snapshot.paramMap.get('id');
    this.segment = this.route.snapshot.paramMap.get('segment');
    const observerFetchCurrentUserInfo = this.logic.fetchCurrentUserInfo();
    const observerFetchAnyTask = this.logic.fetchAnyTask(this.taskId)
      .pipe(map((data) => this.taskDetail = data))
      .pipe(concatMap(() => this.logic.fetchMemberListOnRoom(this.taskDetail.roomID)));
    // const observerFetchMessagePerTask = this.logic.fetchMessagePerTask(this.taskId);

    forkJoin({
      currentUserInfo: observerFetchCurrentUserInfo,
      anyTask: observerFetchAnyTask,
      // messagePerTask: observerFetchMessagePerTask,
    }).subscribe((result) => {
      console.log('result: ', result);
      this.currentUserId = result.currentUserInfo.sub;
      this.roomMembers = result.anyTask.items;
      // this.message = result.messagePerTask.items;
    });
  }

  sendMessage(): void {
    if (this.arrayImageBase64Data.length === 0) {
      this.logic.sendNewMessage(this.taskId, this.newMsg, this.currentUserId)
        .subscribe(() => this.newMsg = '');
    } else {
      this.logic.uploadFile(this.arrayImageBase64Data, this.taskId)
        .pipe(map((data) => data.key))
        .pipe(concatMap((result) => this.logic.getStorage(result)))
        .pipe(toArray())
        .pipe(concatMap((data) => this.logic.sendNewMessage(this.taskId, this.newMsg, this.currentUserId, data)))
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
}
