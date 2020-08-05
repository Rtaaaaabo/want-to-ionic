import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-room',
  templateUrl: './list-room.component.html',
  styleUrls: ['./list-room.component.scss'],
})
export class ListRoomComponent implements OnInit {

  roomList = [];

  constructor() { }

  ngOnInit() { }

  presentAddRoomItem(companyId: string): void {
    console.log('companyId', companyId);
  }

  navigateToTask(room): void {
    console.log(room);
  }

  deleteRoom(room): void {
    console.log(room);
  }

}
