import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OwnTaskLogic } from './logic/own-task.logic';

@Component({
  selector: 'app-own-task',
  templateUrl: './own-task.page.html',
  styleUrls: ['./own-task.page.scss'],
})
export class OwnTaskPage implements OnInit {

  constructor(
    private router: Router,
    private logic: OwnTaskLogic,
  ) { }

  ngOnInit() {
    this.logic.fetchRoomGroup()
      .subscribe((data) => {

      })
  }

  navigateToTaskDetail() {
    console.log('Navigator to task detail');
  }

}
