import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-room-members',
  templateUrl: './room-members.page.html',
  styleUrls: ['./room-members.page.scss'],
})
export class RoomMembersPage implements OnInit {

  constructor(
    private location: Location,
  ) { }

  ngOnInit() {
  }

  goBackToRoom() {
    this.location.back();
  }

  activeEditMode() {
    console.log('activeEditMode');
  }

  searchRoomMembers(ev) {
    console.log('searchRoomMembers');
  }

  addMemberOnRoom() {
    console.log('addMemberOnRoom');
  }

}
