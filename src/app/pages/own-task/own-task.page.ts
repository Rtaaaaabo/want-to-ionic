import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-own-task',
  templateUrl: './own-task.page.html',
  styleUrls: ['./own-task.page.scss'],
})
export class OwnTaskPage implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }

  navigateToTaskDetail() {
    console.log('Navigator to task detail');
  }

}
