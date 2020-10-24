import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { from } from 'rxjs';
import { catchError, filter, flatMap, map, mergeMap, tap } from 'rxjs/operators';
import { RoomMembersLogic } from './logic/room-members.logic';
import { AddPersonModalComponent } from '../task/component/add-person-modal/add-person-modal.component';


@Component({
  selector: 'app-room-members',
  templateUrl: './room-members.page.html',
  styleUrls: ['./room-members.page.scss'],
})
export class RoomMembersPage implements OnInit {
  companyId: number | string;
  roomId: string;
  roomMembers = [];
  notAssignMembers = [];

  constructor(
    private logic: RoomMembersLogic,
    private location: Location,
    private modalCtrl: ModalController,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.notAssignMembers = [];
    this.companyId = this.route.snapshot.paramMap.get('companyId');
    this.roomId = this.route.snapshot.paramMap.get('roomId');
    this.logic.fetchRoomMemberGroup(this.roomId)
      .pipe(map((items) => this.roomMembers = items))
      .pipe(flatMap(() => this.logic.fetchCompanyMember(this.companyId)))
      .subscribe(({ items }) => { // companyMembers
        console.log('companyMembers', items);
        console.log('roomMembers', this.roomMembers);
        this.checkNotAssignMember(items, this.roomMembers);

      });
  }

  checkNotAssignMember(companyMembers, roomMembers): Array<any> {
    let roomUser = []
    for (let i = 0; i < roomMembers.length; i++) {
      roomUser.push(roomMembers[i].user);
    }
    this.notAssignMembers = [];
    return companyMembers.filter((o1) => {
      return !roomUser.some((o2) => {
        return o1.id === o2.id;
      });
    });
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

  async addMemberOnRoom() {
    const modal = await this.modalCtrl.create({
      component: AddPersonModalComponent,
      componentProps: {
        members: this.notAssignMembers,
        companyId: this.companyId,
      }
    });
    modal.onDidDismiss().then(({ data }) => {
      console.log(data);
      if (data === undefined) {
        return;
      };
      from(data)
        .pipe(flatMap((userId) => this.logic.createUserRoomGroup(userId, this.roomId)),
          catchError((error) => error))
        .pipe(flatMap(() => this.logic.fetchRoomMemberGroup(this.roomId)))
        .subscribe((items) => {
          this.notAssignMembers = [];
          this.roomMembers = [];
          items.forEach((element) => {
            this.roomMembers.push(element);
          });
        })
    })
    return modal.present();
  }
}
