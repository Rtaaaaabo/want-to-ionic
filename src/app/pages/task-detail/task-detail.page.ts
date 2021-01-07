import { Component, OnInit, ViewChild } from '@angular/core';
import { Location, ViewportScroller } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ModalController, ActionSheetController, ToastController, IonContent, Platform, AlertController } from '@ionic/angular';
import { Plugins, CameraResultType, FilesystemDirectory, FilesystemEncoding } from '@capacitor/core';
import { from, Observable } from 'rxjs';
import { TaskDetailLogic } from './logic/task-detail.logic';
import { AddTaskModalComponent } from 'src/app/shared/component/modal/add-task-modal/add-task-modal.component';
import { filter, tap, map, concatMap, toArray } from 'rxjs/operators';
import { CurrentUserInfo } from '../task/interface/current-user-info.interface';
import { ListRoomGroupsQuery } from 'src/app/API.service';
import { ListMessagesQuery } from 'src/app/shared/service/amplify.service';
const { Camera, Filesystem } = Plugins;

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.page.html',
  styleUrls: ['./task-detail.page.scss'],
})
export class TaskDetailPage implements OnInit {
  // @ViewChild('comment') child: HTMLElement;
  // @ViewChild(IonContent, { static: false }) content: IonContent;
  taskId: string;
  segment: string;
  taskDetail;
  link = "comment"
  fragmentComment = '';
  newMsg: string = '';
  message: ListMessagesQuery;
  userId: string;
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
    private platform: Platform,
    private readonly alertCtrl: AlertController,
  ) {
    this.initializeApp()
      .subscribe(() => {
        this.logic.onCreateMessageListener()
          .subscribe(() => {
            this.logic.fetchMessagePerTask(this.taskId)
              .subscribe((result) => {
                this.message = result.items
              })
          });
      });
  }

  ngOnInit(): void {
    this.taskId = this.route.snapshot.paramMap.get('id');
    this.segment = this.route.snapshot.paramMap.get('segment');
    this.logic.fetchCurrentUserInfo().subscribe((res: CurrentUserInfo) => {
      this.userId = res.sub;
    });
    this.logic.fetchAnyTask(this.taskId)
      .pipe(map((data) => this.taskDetail = data))
      .pipe(concatMap(() => this.logic.fetchMemberListOnRoom(this.taskDetail.roomID)))
      .subscribe(({ items }) => {
        this.roomMembers = items;
      });
    this.logic.fetchMessagePerTask(this.taskId)
      .subscribe((data) => {
        this.message = data.items;
      });
  }

  sendMessage(): void {
    if (this.arrayImageBase64Data.length === 0) {
      this.logic.sendNewMessage(this.taskId, this.newMsg, this.userId)
        .subscribe(() => this.newMsg = '');
    } else {
      this.logic.uploadFile(this.arrayImageBase64Data, this.taskId)
        .pipe(map((data) => data.key))
        .pipe(concatMap((result) => this.logic.getStorage(result)))
        .pipe(toArray())
        .pipe(concatMap((data) => this.logic.sendNewMessage(this.taskId, this.newMsg, this.userId, data)))
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
        roomMembers: this.roomMembers
      },
    });
    const dismissObservable = from(modal.onDidDismiss());
    dismissObservable
      .pipe(filter(({ data }) => data !== undefined))
      .pipe(concatMap(({ data }) => this.logic.updateTaskToRoom(data, this.taskId)))
      .pipe(concatMap(() => this.logic.fetchAnyTask(this.taskId)))
      .subscribe((data) => {
        this.taskDetail = data;
      })
    return modal.present();
  }

  doneTask(taskDetail): void {
    const presentToast = from(this.presentDoneToast());
    this.logic.updateTaskItem(taskDetail, 10)
      .pipe(concatMap(() => this.logic.fetchAnyTask(taskDetail.id)))
      .pipe(tap(() => presentToast))
      .subscribe((data) => this.taskDetail = data);
  }

  moveTask(taskDetail): void {
    const presentToast = from(this.presentMoveTask());
    this.logic.updateTaskItem(taskDetail, 0)
      .pipe(concatMap(() => this.logic.fetchAnyTask(taskDetail.id)))
      .pipe(tap(() => presentToast))
      .pipe(map((data) => this.taskDetail = data))
      .subscribe(() => { });
  }

  async presentActionSheet(taskDetail): Promise<void> {
    const activeActionSheet = await this.actionSheetCtrl.create({
      cssClass: 'my-custom-class',
      buttons: [
        {
          text: '編集',
          handler: () => {
            this.presentModalEditTask(taskDetail)
          }
        },
        {
          text: '完了',
          handler: () => {
            this.doneTask(taskDetail);
          }
        },
        {
          text: '削除',
          role: 'destructive',
          handler: () => {
            this.deleteTask(taskDetail)
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
          text: '削除',
          role: 'destructive',
          handler: () => {
            this.deleteTask(taskDetail)
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

  deleteTask(taskDetail): void { }

  goBackToRoom(): void {
    this.location.back();
  }

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

  onFileSelect(ev) {
    console.log('choiceFiles', ev);
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
