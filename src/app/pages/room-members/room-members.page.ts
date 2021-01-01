import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { concatMap, map, switchMap } from 'rxjs/operators';
import { RoomMembersLogic } from './logic/room-members.logic';
import { AddPersonModalComponent } from '../task/component/add-person-modal/add-person-modal.component';

@Component({
  selector: 'app-room-members',
  templateUrl: './room-members.page.html',
  styleUrls: ['./room-members.page.scss'],
})
export class RoomMembersPage implements OnInit {
  currentUserId: string;
  companyId: number | string;
  roomId: string;
  companyMembers;
  currentUser;
  roomMembers = [];
  notAssignMembers = [];

  constructor(
    private logic: RoomMembersLogic,
    private location: Location,
    private modalCtrl: ModalController,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.notAssignMembers = [];
    this.companyId = this.route.snapshot.paramMap.get('companyId');
    this.roomId = this.route.snapshot.paramMap.get('roomId');
    this.logic.fetchCurrentUserId()
      .pipe(map((currentUserId) => this.currentUserId = currentUserId))
      .pipe(concatMap(() => this.logic.fetchCurrentUser(this.currentUserId)))
      .pipe(map((result) => this.currentUser = result))
      .pipe(concatMap(() => this.logic.fetchRoomMemberGroup(this.roomId)))
      .pipe(concatMap((result) => this.logic.setRoomMembers(result, this.currentUserId)))
      .pipe(map((members) => this.roomMembers = members))
      .pipe(concatMap(() => this.logic.fetchCompanyMember(this.companyId)))
      .subscribe(({ items: companyMembers }) => {
        this.companyMembers = companyMembers;
        this.roomMembers.unshift(this.currentUser);
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

  goBackToRoom(): void {
    this.location.back();
  }

  withdrawalFromAnyRoom(): void {
    this.logic.fetchRoomMembersExceptOwn(this.roomId, this.currentUserId)
      .pipe(switchMap((data) => data.length === 0 ? this.logic.deleteRoomItem(this.roomId) : this.logic.removeOwnFromRoom(this.roomId, this.currentUser)));
  }

  searchRoomMembers(ev: CustomEvent): void {
    const nameQuery = ev.detail.value;
    if (nameQuery !== null) {
      this.logic.fetchRoomMembers(this.roomId, nameQuery)
        .pipe(map((result) => result.items))
        .subscribe((items) => {
          this.roomMembers = items;
        })
    } else {
      this.logic.fetchRoomMembers(this.roomId)
        .pipe(map((result) => result.items))
        .subscribe(() => { });
    }
  }

  async addMemberOnRoom(): Promise<void> {
    const modal = await this.modalCtrl.create({
      component: AddPersonModalComponent,
      componentProps: {
        notAssignMembers: this.notAssignMembers,
        companyMembers: this.companyMembers,
        companyId: this.companyId,
        roomId: this.roomId,
      }
    });
    modal.onDidDismiss()
      .then(({ data }) => {
        if (data.result === 'dismiss') {
          return;
        };
        this.logic.fetchRoomMembers(this.roomId)
          .pipe(concatMap(({ items: members }) => this.logic.setRoomMembers(members, this.currentUserId)))
          .subscribe((members) => {
            this.roomMembers = members;
            this.roomMembers.unshift(this.currentUser);
            this.notAssignMembers = this.checkNotAssignMember(this.companyMembers, this.roomMembers);
          })
      })
    return modal.present();
  }
}
