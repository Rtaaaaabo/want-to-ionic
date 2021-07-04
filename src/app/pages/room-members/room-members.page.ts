import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { concatMap, map, switchMap } from 'rxjs/operators';
import { RoomMembersLogic } from './logic/room-members.logic';
import { AddPersonModalComponent } from '../task/component/add-person-modal/add-person-modal.component';
import { CurrentUser, Attribute } from './models/room-members.model';

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
  // currentUser;
  roomMembers = [];
  notAssignMembers = [];

  currentUserAttribute: Attribute;
  currentUser: CurrentUser;

  constructor(
    private readonly logic: RoomMembersLogic,
    private readonly modalCtrl: ModalController,
    private readonly location: Location,
    private readonly router: Router,
    private readonly route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.notAssignMembers = [];
    this.companyId = this.route.snapshot.paramMap.get('companyId');
    this.roomId = this.route.snapshot.paramMap.get('roomId');
    this.logic.fetchCurrentUser()
      .pipe(map((data) => this.currentUserAttribute = data))
      .pipe(concatMap(() => this.logic.fetchAnyUserInfoFromList(this.currentUserAttribute.email)))
      .pipe(map(({ items }) => this.currentUser = items[0]))
      .pipe(concatMap(() => this.logic.fetchRoomMemberGroup(this.roomId)))
      .pipe(concatMap((result) => this.logic.setRoomMembers(result, this.currentUser.id)))
      .pipe(map((members) => this.roomMembers = members))
      .pipe(concatMap(() => this.logic.fetchCompanyMember(this.companyId)))
      .subscribe((data) => {
        this.companyMembers = data.items;
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
    this.logic.fetchRoomMembersExceptOwn(this.roomId, this.currentUser.id)
      .pipe(switchMap((data) => data.length === 0 ?
        this.logic.deleteRoomItem(this.roomId) : this.logic.removeOwnFromRoom(this.roomId, this.currentUser.id)
      ))
      .subscribe(() => {
        this.router.navigate(['/home']);
      })
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
          .pipe(concatMap(({ items: members }) => this.logic.setRoomMembers(members, this.currentUser.id)))
          .subscribe((members) => {
            this.roomMembers = members;
            this.roomMembers.unshift(this.currentUser);
            this.notAssignMembers = this.checkNotAssignMember(this.companyMembers, this.roomMembers);
          })
      })
    return modal.present();
  }
}
