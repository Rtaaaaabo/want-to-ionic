import { Component, OnInit, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { TaskDetailLogicService } from './logic/task-detail-logic.service';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.page.html',
  styleUrls: ['./task-detail.page.scss'],
})
export class TaskDetailPage implements OnInit {
  taskId: string;
  task;
  link = "comment"
  testHref;
  fragmentComment = '';
  @ViewChild('comment') child: HTMLElement;

  constructor(
    private location: Location,
    private logic: TaskDetailLogicService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    this.taskId = this.route.snapshot.paramMap.get('id');
    this.testHref = `task-detail/${this.taskId}#comment`;
    this.logic.fetchAnyTask(this.taskId).subscribe((data) => {
      this.task = data;
    });
    this.route.fragment.subscribe((data) => {
      this.fragmentComment = data;
    });
  }

  ngAfterViewInit(): void {
    console.log(this.child);
    console.log(document.getElementById('comment').offsetTop);
    // this.route.fragment.subscribe((result) => {
    //   // document.querySelector('#' + data).scrollIntoView(true);
    //   // console.log(document.querySelector('#' + data));
    // });
  }

  goBackToRoom() {
    this.location.back();
  }

}
