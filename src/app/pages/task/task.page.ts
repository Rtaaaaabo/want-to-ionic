import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { ModalController, ToastController } from '@ionic/angular';
import { from, of } from 'rxjs';
import { flatMap, catchError, tap } from 'rxjs/operators';
import { GetRoomQuery } from 'src/app/shared/service/amplify.service';
import { AddTaskModalComponent } from '../../shared/component/modal/add-task-modal/add-task-modal.component';
import { DeleteTaskModalComponent } from '../../shared/component/modal/delete-task-modal/delete-task-modal.component';
import { TaskLogicService } from './logic/task-logic.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.page.html',
  styleUrls: ['./task.page.scss'],
})
export class TaskPage implements OnInit {
  room = {} as GetRoomQuery;
  roomId: string;
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
    private logic: TaskLogicService,
    private toastCtrl: ToastController,
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.isReorder = false;
    this.segment = 'active';
    this.roomId = this.route.snapshot.paramMap.get('id');
    this.logic.featchRoomInfo(this.roomId)
      .subscribe((roomInfo: GetRoomQuery) => {
        this.room = roomInfo;
      });
    this.logic.fetchCurrentUserInfo().subscribe((email) => this.userEmail = email);
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
      componentProps: { room: this.room },
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

  async deleteTask(item) {
    const modal = await this.modalCtrl.create({
      component: DeleteTaskModalComponent,
      componentProps: { task: item },
    });
    const dismissObservable = from(modal.onDidDismiss());
    dismissObservable
      .pipe(flatMap(({ data }) => this.logic.deleteTaskItem(data.id)), catchError(err => of(err)))
      .pipe(flatMap(() => this.logic.fetchActiveTaskPerRoom(this.roomId)))
      .subscribe((items) => {
        this.taskActiveItems = items;
      });
    return modal.present();
  }

}
