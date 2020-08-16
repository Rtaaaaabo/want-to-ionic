import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { from } from 'rxjs';
import { GetRoomQuery } from 'src/app/shared/service/amplify.service';
import { AddTaskModalComponent } from '../../shared/component/modal/add-task-modal/add-task-modal.component';
import { TaskLogicService } from './logic/task-logic.service';
import { flatMap } from 'rxjs/operators';

@Component({
  selector: 'app-task',
  templateUrl: './task.page.html',
  styleUrls: ['./task.page.scss'],
})
export class TaskPage implements OnInit {
  room = {} as GetRoomQuery;
  roomId: string;

  constructor(
    private router: Router,
    private modalCtrl: ModalController,
    private route: ActivatedRoute,
    private location: Location,
    private logic: TaskLogicService,
  ) { }

  ngOnInit() {
    this.roomId = this.route.snapshot.paramMap.get('id');
    this.logic.featchRoomInfo(this.roomId).subscribe((data: GetRoomQuery) => {
      this.room = data;
    })
  }

  async presentAddTask() {
    const modal = await this.modalCtrl.create({
      component: AddTaskModalComponent,
    });
    const dismissObservable = from(modal.onDidDismiss());
    dismissObservable.pipe(flatMap(({ data }) => this.logic.createTaskToRoom(data)))
    return modal.present();

  }

  goBackToRoom() {
    this.location.back();
  }

  sortTaskItem() {
    console.log('Sort Task Item');
  }

}
