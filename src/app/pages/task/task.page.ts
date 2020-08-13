import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task',
  templateUrl: './task.page.html',
  styleUrls: ['./task.page.scss'],
})
export class TaskPage implements OnInit {
  room;

  constructor(
    private router: Router,
    private location: Location,
  ) { }

  ngOnInit() {
    // this.room = this.router.getCurrentNavigation().extras.state.data;
    // console.log(this.room);
  }

  goBackToRoom() {
    this.location.back();
  }

}
