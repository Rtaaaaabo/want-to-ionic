import { Component, OnInit } from '@angular/core';
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
    })
    this.router.events.subscribe((s) => {
      if (s instanceof NavigationEnd) {
        const tree = this.router.parseUrl(this.router.url);
        if (tree.fragment) {
          const element = document.querySelector('#' + tree.fragment);
          if (element) {
            element.scrollIntoView(true);

            // element.scrollIntoView(true)
          };
        }
      }
    })
    // this.route.fragment.subscribe((data) => {
    //   this.link = data;
    // });
  }

  ngAfterViewInit(): void {

  }

  goBackToRoom() {
    this.location.back();
  }

}
