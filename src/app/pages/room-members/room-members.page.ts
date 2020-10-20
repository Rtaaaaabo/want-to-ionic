import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { from } from 'rxjs';
import { catchError, flatMap } from 'rxjs/operators';
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
  roomMembers;
  companyMembers;

  constructor(
    private logic: RoomMembersLogic,
    private location: Location,
    private modalCtrl: ModalController,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.companyId = this.route.snapshot.paramMap.get('companyId');
    this.roomId = this.route.snapshot.paramMap.get('roomId');
    // Companyに所属しているMemberの情報を取得
    this.logic.fetchCompanyMember(this.companyId).subscribe(({ items }) => {
      this.companyMembers = items;
    });
    // Roomに所属しているMemberの情報を取得
    this.logic.fetchRoomMemberGroup(this.roomId)
      .subscribe(({ items }) => {
        console.log(items);
        this.roomMembers = items;
      })
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
      if (data === undefined) {
        return;
      };
      from(data)
        .pipe(flatMap((userId) => this.logic.createUserRoomGroup(userId, this.roomId)),
          catchError((error) => error))
        .pipe(flatMap(() => this.logic.
          fetchRoomMemberGroup(this.roomId)))
        .subscribe(({ items }) => {
          this.roomMembers = items;
        })
    })

    return modal.present();
  }

}
