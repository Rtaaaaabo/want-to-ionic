import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { TaskDetailLogicService } from './logic/task-detail-logic.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.page.html',
  styleUrls: ['./task-detail.page.scss'],
})
export class TaskDetailPage implements OnInit {
  taskId: string;
  task;

  constructor(
    private location: Location,
    private logic: TaskDetailLogicService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    this.taskId = this.route.snapshot.paramMap.get('id');
    this.logic.fetchAnyTask(this.taskId).subscribe(data => {
      this.task = data;
      console.log(this.task);
    })
  }

  goBackToRoom() {
    this.location.back();
  }

}
