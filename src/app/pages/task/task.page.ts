import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { from } from 'rxjs';
import { flatMap } from 'rxjs/operators';
import { GetRoomQuery } from 'src/app/shared/service/amplify.service';
import { AddTaskModalComponent } from '../../shared/component/modal/add-task-modal/add-task-modal.component';
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

  constructor(
    private router: Router,
    private modalCtrl: ModalController,
    private route: ActivatedRoute,
    private location: Location,
    private logic: TaskLogicService,
  ) { }

  ngOnInit() {
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

  async presentAddTask() {
    const modal = await this.modalCtrl.create({
      component: AddTaskModalComponent,
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

  goBackToRoom() {
    this.location.back();
  }

  sortTaskItem() {
    console.log('Sort Task Item');
  }

}
