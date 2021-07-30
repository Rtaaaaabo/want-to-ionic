import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { ModalController, Platform } from '@ionic/angular';
import { from, Observable, Subscription } from 'rxjs';
import { concatMap, map, switchMap, filter } from 'rxjs/operators';
import { RoomMembersLogic } from './logic/room-members.logic';
import { AddPersonModalComponent } from '../task/component/add-person-modal/add-person-modal.component';
import { CurrentUser, Attribute } from './models/room-members.model';
import { MemberTask } from 'src/app/pages/task/model/task-member.model';

@Component({
  selector: 'app-room-members',
  templateUrl: './room-members.page.html',
  styleUrls: ['./room-members.page.scss'],
})
export class RoomMembersPage implements OnInit {
  currentUserId: string;
  companyId: number | string;
  roomId: string;
  companyMembers: any;
  roomMembers = [];
  notAssignMembers: Array<MemberTask> = [];

  currentUserAttribute: Attribute;
  currentUser: CurrentUser;

  subscriptionCreateRoomMember: Subscription;
  subscriptionUpdateRoomMember: Subscription;
  subscriptionDeleteRoomMember: Subscription;

  constructor(
    private readonly logic: RoomMembersLogic,
    private readonly modalCtrl: ModalController,
    private readonly location: Location,
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private readonly platform: Platform,
  ) {
    this.initializeApp().subscribe(() => {
      this.subscriptionCreateRoomMember = this.logic.onCreateRoomMemberListener().subscribe({
        next: () => this.logic.fetchRoomMembers(this.roomId)
          .pipe(concatMap(({ items: members }) => this.logic.setRoomMembers(members, this.currentUser.id)))
          .subscribe((members) => {
            this.roomMembers = members;
            this.roomMembers.unshift(this.currentUser);
            this.notAssignMembers = this.checkNotAssignMember(this.companyMembers, this.roomMembers);
          })
      });
      this.subscriptionUpdateRoomMember = this.logic.onUpdateRoomMemberListener().subscribe({
        next: () => this.logic.fetchRoomMembers(this.roomId)
          .pipe(concatMap(({ items: members }) => this.logic.setRoomMembers(members, this.currentUser.id)))
          .subscribe((members) => {
            this.roomMembers = members;
            this.roomMembers.unshift(this.currentUser);
            this.notAssignMembers = this.checkNotAssignMember(this.companyMembers, this.roomMembers);
          })
      })
      this.subscriptionDeleteRoomMember = this.logic.onDeleteRoomMemberListener().subscribe({
        next: () => this.logic.fetchRoomMembers(this.roomId)
          .pipe(concatMap(({ items: members }) => this.logic.setRoomMembers(members, this.currentUser.id)))
          .subscribe((members) => {
            this.roomMembers = members;
            this.roomMembers.unshift(this.currentUser);
            this.notAssignMembers = this.checkNotAssignMember(this.companyMembers, this.roomMembers);
          })
      })
    })
  }

  initializeApp(): Observable<string> {
    return from(this.platform.ready());
  }

  ngOnInit(): void {
    this.notAssignMembers = [];
    this.companyId = this.route.snapshot.paramMap.get('companyId');
    this.roomId = this.route.snapshot.paramMap.get('roomId');
    this.logic.fetchCurrentUser()
      .pipe(map((data) => this.currentUserAttribute = data))
      .pipe(concatMap(() => this.logic.fetchAnyUserInfoFromList(this.currentUserAttribute.email)))
      .pipe(map((items) => this.currentUser = items[0]))
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
    const observableDismiss = from(modal.onDidDismiss());
    observableDismiss
      .pipe(filter(({ data }) => data.result === 'dismiss'))
      .pipe(concatMap(() => this.logic.fetchRoomMembers(this.roomId)))
      .pipe(concatMap(({ items: members }) => this.logic.setRoomMembers(members, this.currentUser.id)))
      .subscribe((members) => {
        this.roomMembers = members;
        this.roomMembers.unshift(this.currentUser);
        this.notAssignMembers = this.checkNotAssignMember(this.companyMembers, this.roomMembers);
      })
    return modal.present();
  }

  ngOnDestroy(): void {
    this.subscriptionCreateRoomMember.unsubscribe();
    this.subscriptionUpdateRoomMember.unsubscribe();
    this.subscriptionDeleteRoomMember.unsubscribe();
  }
}
