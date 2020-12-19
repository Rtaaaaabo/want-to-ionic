import { Component, OnInit, ViewChild } from '@angular/core';
import { Location, ViewportScroller } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ModalController, ActionSheetController, ToastController, IonContent, Platform } from '@ionic/angular';
import { Plugins, CameraResultType } from '@capacitor/core';
import { from, Observable, of } from 'rxjs';
import { TaskDetailLogic } from './logic/task-detail.logic';
import { AddTaskModalComponent } from 'src/app/shared/component/modal/add-task-modal/add-task-modal.component';
import { filter, tap, map, concatMap } from 'rxjs/operators';
import { CurrentUserInfo } from '../task/interface/current-user-info.interface';
import { ListRoomGroupsQuery } from 'src/app/API.service';


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
  taskDetail;
  link = "comment"
  fragmentComment = '';
  newMsg: string = '';
  message;
  userId: string;
  roomMembers: Array<ListRoomGroupsQuery>;
  imageUrl: string = 'https://cdn.image.st-hatena.com/image/square/200563c38a06138bf5d0ae1f7f38e8998d587b8f/backend=imagemagick;height=405;version=1;width=960/https%3A%2F%2Fcdn-ak.f.st-hatena.com%2Fimages%2Ffotolife%2Fc%2Fchiakimori%2F20201216%2F20201216105845.jpg';

  constructor(
    private location: Location,
    private logic: TaskDetailLogic,
    private route: ActivatedRoute,
    private scroll: ViewportScroller,
    private modalCtrl: ModalController,
    private actionSheetCtrl: ActionSheetController,
    private toastCtrl: ToastController,
    private platform: Platform,
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

  ngOnInit() {
    console.log(this.imageUrl);
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
    this.logic.fetchMessagePerTask(this.taskId).subscribe((data) => {
      this.message = data.items;
    });
  }

  sendMessage() {
    this.logic.sendNewMessage(this.taskId, this.newMsg, this.userId)
      .subscribe(() => this.newMsg = '');
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

  async presentModalEditTask(taskDetail) {
    console.log('taskDetail', taskDetail);
    console.log('roomMembers', this.roomMembers);
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
      .pipe(tap(() => presentToast)).subscribe((data) => this.taskDetail = data);
  }

  moveTask(taskDetail) {
    const presentToast = from(this.presentMoveTask());
    this.logic.updateTaskItem(taskDetail, 0)
      .pipe(concatMap(() => this.logic.fetchAnyTask(taskDetail.id)))
      .pipe(tap(() => presentToast))
      .pipe(map((data) => this.taskDetail = data))
      .subscribe((data) => {
        console.log(data);
      });
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

  deleteTask(taskDetail): void {
    console.log('削除します。', taskDetail);
  }

  goBackToRoom(): void {
    this.location.back();
  }

  selectFile(): void {

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
    this.imageUrl = image.dataUrl;
  }

  selectPhoto(): void {
    console.log('selectPhoto');
  }

  initializeApp(): Observable<string> {
    return from(this.platform.ready());
  }


}
