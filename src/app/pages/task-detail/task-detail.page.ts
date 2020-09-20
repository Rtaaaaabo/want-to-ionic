import { Component, OnInit, ViewChild } from '@angular/core';
import { Location, ViewportScroller } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ModalController, ActionSheetController, ToastController, IonContent, Platform } from '@ionic/angular';
import { from, Observable } from 'rxjs';
import { TaskDetailLogicService } from './logic/task-detail-logic.service';
import { AddTaskModalComponent } from 'src/app/shared/component/modal/add-task-modal/add-task-modal.component';
import { flatMap, tap, map, filter, isEmpty } from 'rxjs/operators';

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
  testHref;
  fragmentComment = '';
  newMsg: string = '';
  message;


  constructor(
    private location: Location,
    private logic: TaskDetailLogicService,
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
          .subscribe((value) => {
            this.logic.fetchMessagePerTask(this.taskId).subscribe((result) => {
              this.message = result.items
              console.log(this.message);
            })
          });
      });
  }

  ngOnInit() {
    this.taskId = this.route.snapshot.paramMap.get('id');
    this.segment = this.route.snapshot.paramMap.get('segment');
    this.testHref = `task-detail/${this.taskId}#comment`;
    this.logic.fetchAnyTask(this.taskId).subscribe((data) => {
      this.taskDetail = data;
    });
    this.logic.fetchMessagePerTask(this.taskId).subscribe((data) => {
      this.message = data.items;
    })
  }

  sendMessage() {
    this.logic.sendNewMessage(this.taskId, this.newMsg).subscribe();
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
    const modal = await this.modalCtrl.create({
      component: AddTaskModalComponent,
      componentProps: { taskDetail: taskDetail },
    });
    return modal.present();
  }

  doneTask(taskDetail) {
    const presentToast = from(this.presentDoneToast());
    this.logic.updateTaskItem(taskDetail, 10)
      .pipe(flatMap(() => this.logic.fetchAnyTask(taskDetail.id)))
      .pipe(tap(() => presentToast)).subscribe((data) => this.taskDetail = data);
  }

  moveTask(taskDetail) {
    const presentToast = from(this.presentMoveTask());
    this.logic.updateTaskItem(taskDetail, 0)
      .pipe(flatMap(() => this.logic.fetchAnyTask(taskDetail.id)))
      .pipe(tap(() => presentToast)).subscribe((data) => this.taskDetail = data);
  }

  async presentActionSheet(taskDetail) {

    const activeActionSheet = await this.actionSheetCtrl.create({
      cssClass: 'my-custom-class',
      buttons: [
        {
          text: '完了',
          icon: 'checkbox',
          handler: () => {
            this.doneTask(taskDetail);
          }
        },
        {
          text: '編集',
          icon: 'create',
          handler: () => {
            this.presentModalEditTask(taskDetail)
          }
        },
        {
          text: '削除',
          role: 'destructive',
          icon: 'trash',
          handler: () => {
            this.deleteTask(taskDetail)
          }
        },
        {
          text: 'キャンセル',
          icon: 'close',
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
          icon: 'create',
          handler: () => {
            this.presentModalEditTask(taskDetail)
          }
        },
        {
          text: '削除',
          role: 'destructive',
          icon: 'trash',
          handler: () => {
            this.deleteTask(taskDetail)
          }
        },
        {
          text: 'キャンセル',
          icon: 'close',
          role: 'cancel',
          handler: () => {
            console.log('キャンセル');
          }
        }
      ]
    });

    if (this.segment === 'active') {
      await activeActionSheet.present();
    } else if (this.segment === 'done') {
      await doneActionSheet.present();
    }
  }

  deleteTask(taskDetail) {
    console.log('削除します。', taskDetail);
  }

  goBackToRoom() {
    this.location.back();
  }


  initializeApp(): Observable<string> {
    return from(this.platform.ready());
  }

}
