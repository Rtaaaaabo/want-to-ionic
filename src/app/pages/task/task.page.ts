import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { ModalController, ToastController } from '@ionic/angular';
import { from, of } from 'rxjs';
import { flatMap, catchError } from 'rxjs/operators';
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
  taskItems;
  isReorder: boolean;

  constructor(
    private router: Router,
    private modalCtrl: ModalController,
    private route: ActivatedRoute,
    private location: Location,
    private logic: TaskLogicService,
    private toastCtrl: ToastController,
  ) { }

  ngOnInit(): void {
    this.isReorder = false;
    this.roomId = this.route.snapshot.paramMap.get('id');
    this.logic.featchRoomInfo(this.roomId)
      .subscribe((roomInfo: GetRoomQuery) => {
        this.room = roomInfo;
      });
    this.logic.fetchCurrentUserInfo().subscribe((email) => this.userEmail = email);
    this.logic.fetchTaskPerRoom(this.roomId).subscribe(({ items }) => {
      this.taskItems = items;
    })
  }

  async presentDoneToast() {
    const toast = await this.toastCtrl.create({
      message: ''
    })
  }

  async presentAddTask() {
    const modal = await this.modalCtrl.create({
      component: AddTaskModalComponent,
      componentProps: { room: this.room },
    });
    const dismissObservable = from(modal.onDidDismiss());
    dismissObservable
      .pipe(flatMap(({ data }) => this.logic.createTaskToRoom(data, this.roomId, this.userEmail)))
      .pipe(flatMap(() => this.logic.fetchTaskPerRoom(this.roomId)))
      .subscribe(({ items }) => {
        this.taskItems = items;
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
    const itemMove = this.taskItems.splice(ev.detail.from, 1)[0];
    this.taskItems.splice(ev.detail.to, 0, itemMove);
    ev.detail.complete();
  }

  navigateToTaskDetail(task): void {
    this.router.navigate(['task-detail', `${task.id}`])
  }

  addComment(item) {
    console.log('addComment', item);
  }

  segmentChanged(ev): void {
    console.log('ev', ev);
  }

  doneTask(taskItem) {
    console.log('doneTask', taskItem);
  }

  async deleteTask(item) {
    const modal = await this.modalCtrl.create({
      component: DeleteTaskModalComponent,
      componentProps: { task: item },
    });
    const dismissObservable = from(modal.onDidDismiss());
    dismissObservable
      .pipe(flatMap(({ data }) => this.logic.deleteTaskItem(data.id)), catchError(err => of(err)))
      .pipe(flatMap(() => this.logic.fetchTaskPerRoom(this.roomId)))
      .subscribe(({ items }) => {
        this.taskItems = items;
      });
    return modal.present();
  }

}
