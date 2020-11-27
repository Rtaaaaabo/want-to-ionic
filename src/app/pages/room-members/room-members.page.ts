import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { from } from 'rxjs';
import { catchError, concatMap, filter, map } from 'rxjs/operators';
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
  companyMembers;
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
      .pipe(concatMap((result) => this.logic.setRoomMembers(result)))
      .pipe(map((items) => this.roomMembers = items))
      .pipe(concatMap(() => this.logic.fetchCompanyMember(this.companyId)))
      .subscribe(({ items }) => {
        this.companyMembers = items;
        this.notAssignMembers = this.checkNotAssignMember(this.companyMembers, this.roomMembers);
      });
  }

  checkNotAssignMember(companyMembers, roomMembers): Array<any> {
    return companyMembers.filter((companyMember) => {
      return !roomMembers.some((roomMember) => {
        return companyMember.id === roomMember.id;
      })
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
        notAssignMembers: this.notAssignMembers,
        companyMembers: this.companyMembers,
        companyId: this.companyId,
      }
    });
    modal.onDidDismiss().then(({ data }) => {
      console.log(data);
      if (data === undefined) {
        return;
      };
      from(data)
        .pipe(concatMap((userId) => this.logic.createUserRoomGroup(userId, this.roomId)),
          catchError((error) => error))
        .pipe(concatMap(() => this.logic.fetchRoomMemberGroup(this.roomId)))
        .pipe(map((items) => this.roomMembers = items))
        .pipe(concatMap(() => this.logic.fetchCompanyMember(this.companyId)))
        .subscribe(({ items }) => {
          this.notAssignMembers = this.checkNotAssignMember(items, this.roomMembers);
        })
    })
    return modal.present();
  }
}
