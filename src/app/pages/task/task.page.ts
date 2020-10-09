import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { ModalController, ToastController, ActionSheetController } from '@ionic/angular';
import { from } from 'rxjs';
import { flatMap, tap, map } from 'rxjs/operators';
import { GetRoomQuery } from 'src/app/shared/service/amplify.service';
import { AddTaskModalComponent } from '../../shared/component/modal/add-task-modal/add-task-modal.component';
import { DeleteTaskModalComponent } from '../../shared/component/modal/delete-task-modal/delete-task-modal.component';
import { TaskLogic } from './logic/task.logic';
import { CurrentUserInfo } from './interface/current-user-info.interface';

@Component({
  selector: 'app-task',
  templateUrl: './task.page.html',
  styleUrls: ['./task.page.scss'],
})
export class TaskPage implements OnInit {
  room = {} as GetRoomQuery;
  roomId: string;
  userId: string;
  userEmail: string;
  taskActiveItems;
  taskDoneItems;
  isReorder: boolean;
  segment;

  constructor(
    private router: Router,
    private modalCtrl: ModalController,
    private route: ActivatedRoute,
    private location: Location,
    private logic: TaskLogic,
    private toastCtrl: ToastController,
    private actionSheetCtrl: ActionSheetController,
  ) { }

  ngOnInit(): void {

  }

  ionViewWillEnter() {
    this.isReorder = false;
    this.segment = 'active';
    this.roomId = this.route.snapshot.paramMap.get('id');
    this.logic.fetchRoomInfo(this.roomId)
      .subscribe((roomInfo: GetRoomQuery) => {
        this.room = roomInfo;
      });
    this.logic.fetchCurrentUserInfo()
      .pipe(map((res: CurrentUserInfo) => { this.userEmail = res.email; this.userId = res.sub }))
      .pipe(flatMap(() => this.logic.fetchUserInfoFromAmplify(this.userId)))
      .subscribe((result) => {
        console.log(result);

        // this.userEmail = attributes.email;
        // this.userId = attributes.sub;
      });
    this.logic.fetchActiveTaskPerRoom(this.roomId)
      .subscribe((items) => {
        this.taskActiveItems = items;
      })

    this.logic.fetchDoneTaskPerRoom(this.roomId)
      .subscribe((items) => {
        this.taskDoneItems = items;
      })
  }

  async presentDoneToast(): Promise<void> {
    const toast = await this.toastCtrl.create({
      message: 'おつかれさまでした！',
      duration: 2000
    });
    toast.present();
  }

  async presentAddTask() {
    const modal = await this.modalCtrl.create({
      component: AddTaskModalComponent,
      componentProps: { room: this.room, userName: this.userId },
    });
    const dismissObservable = from(modal.onDidDismiss());
    dismissObservable
      .pipe(flatMap(({ data }) => this.logic.createTaskToRoom(data, this.roomId, this.userEmail)))
      .pipe(flatMap(() => this.logic.fetchActiveTaskPerRoom(this.roomId)))
      .subscribe((items) => {
        this.taskActiveItems = items;
      });
    return modal.present();
  }

  goBackToRoom(): void {
    this.location.back();
  }

  sortTaskItem(): void {
    this.isReorder = !this.isReorder;
  }

  reorderTask(ev): void {
    const itemMove = this.taskActiveItems.splice(ev.detail.from, 1)[0];
    this.taskActiveItems.splice(ev.detail.to, 0, itemMove);
    ev.detail.complete();
  }

  navigateToTaskDetail(task, segment): void {
    this.router.navigate(['task-detail', `${task.id}`, `${segment}`])
  }

  addCommentToTaskDetail(task): void {
    this.router.navigate(['task-detail', `${task.id}`], { fragment: 'comment' })
  }

  segmentChanged(ev): void {
    this.segment = ev.detail.value;
  }

  doneTask(taskItem): void {
    const presentToast = from(this.presentDoneToast());
    this.logic.updateTaskItem(taskItem, 10)
      .pipe(flatMap(() => this.logic.fetchActiveTaskPerRoom(this.roomId)))
      .pipe(tap(() => presentToast)).subscribe((data) => this.taskActiveItems = data);
  }


  async presentConfirmDelete(task) {
    const actionSheet = await this.actionSheetCtrl.create({
      buttons: [
        {
          text: '削除',
          role: 'destructive',
          icon: 'trash',
          handler: () => {
            this.deleteTask(task)
          }
        },
        {
          text: 'キャンセル',
          icon: 'close',
          role: 'cancel',
        }
      ]
    })
    return actionSheet.present();
  }

  deleteTask(task) {
    console.log(task);
    this.logic.deleteTaskItem(task.id)
      .pipe(flatMap(() => this.logic.fetchActiveTaskPerRoom(this.roomId)))
      .subscribe((result) => this.taskActiveItems = result);
  }

}
