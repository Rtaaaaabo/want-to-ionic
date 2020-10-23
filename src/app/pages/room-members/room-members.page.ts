import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { from } from 'rxjs';
import { catchError, filter, flatMap, map, mergeMap, tap } from 'rxjs/operators';
import { RoomMembersLogic } from './logic/room-members.logic';
import { AddPersonModalComponent } from '../task/component/add-person-modal/add-person-modal.component';
import { InterfaceRoomMembers } from './interface/room-members.interface';
import { threadId } from 'worker_threads';


@Component({
  selector: 'app-room-members',
  templateUrl: './room-members.page.html',
  styleUrls: ['./room-members.page.scss'],
})
export class RoomMembersPage implements OnInit {
  companyId: number | string;
  roomId: string;
  roomMembers = [];
  companyMembers = [];

  constructor(
    private logic: RoomMembersLogic,
    private location: Location,
    private modalCtrl: ModalController,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    let roomMembers;
    this.companyMembers = [];
    this.companyId = this.route.snapshot.paramMap.get('companyId');
    this.roomId = this.route.snapshot.paramMap.get('roomId');
    this.logic.fetchRoomMemberGroup(this.roomId)
      .pipe(map((items) => this.roomMembers = items))
      .pipe(flatMap(() => this.logic.fetchNonAssignRoomMemberGroup()))
      // .pipe(mergeMap(() => this.logic.fetchCompanyMember(this.companyId, roomMembers)))
      .subscribe((result) => {
        // this.roomMembers = result;
        console.log(result);
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
        members: this.companyMembers,
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
          this.roomMembers = [];
          items.forEach((element) => {
            this.roomMembers.push(element.user);
          });
        })
    })
    return modal.present();
  }
}
