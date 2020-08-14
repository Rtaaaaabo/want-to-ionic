import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { TaskLogicService } from './logic/task-logic.service';
import { GetRoomQuery } from 'src/app/shared/service/amplify.service';

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

  presentAddTask() {
    console.log('Present Add Task');
  }

  goBackToRoom() {
    this.location.back();
  }

}
