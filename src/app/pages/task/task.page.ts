import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task',
  templateUrl: './task.page.html',
  styleUrls: ['./task.page.scss'],
})
export class TaskPage implements OnInit {

  constructor(
    private router: Router,
    private location: Location,
  ) { }

  ngOnInit() {
  }

  goBackToRoom() {
    this.location.back();
  }

}
