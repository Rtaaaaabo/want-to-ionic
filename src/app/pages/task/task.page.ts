import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { TaskLogicService } from './logic/task-logic.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.page.html',
  styleUrls: ['./task.page.scss'],
})
export class TaskPage implements OnInit {
  room;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private logic: TaskLogicService,
  ) { }

  ngOnInit() {
    // this.route.paramMap.subscribe((param) => {
    //   console.log(param);
    // })
    // console.log(this.route.snapshot.paramMap.get('id'));
    // this.logic.featchRoomInfo()
  }

  goBackToRoom() {
    this.location.back();
  }

}
