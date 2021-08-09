import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Location } from '@angular/common';
import { from } from 'rxjs';
import { map, concatMap, filter } from 'rxjs/operators';
import { MemberListLogic } from './logic/member-list.logic';
import { InviteMemberComponent } from './component/modal/invite-member/invite-member.component';
import { MemberDetailModalComponent } from '../../shared/component/modal/member-detail-modal/member-detail-modal.component';
import { CurrentUser, Attribute, CompanyMember } from './models/member-list.interface';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.page.html',
  styleUrls: ['./member-list.page.scss'],
})
export class MemberListPage implements OnInit {
  currentUserAttribute: Attribute;
  currentUser: CurrentUser;
  companyMembers: Array<CompanyMember>;

  constructor(
    private logic: MemberListLogic,
    private readonly location: Location,
    private readonly modalCtrl: ModalController,
  ) { }

  ngOnInit(): void {
    this.logic.fetchCurrentUser()
      .pipe(map((data) => this.currentUserAttribute = data))
      .pipe(concatMap(() => this.logic.fetchAnyUserInfoFromList(this.currentUserAttribute.email)))
      .pipe(map((items) => this.currentUser = items[0]))
      .pipe(concatMap((currentUser) => this.logic.fetchCompanyMembers(currentUser.companyID)))
      .pipe(concatMap((members) => this.logic.setCompanyMembers(members, this.currentUser.id)))
      .subscribe((members) => {
        this.companyMembers = members;
        this.companyMembers.unshift(this.currentUser);
      });
  }

  /**
   * 前ページに戻ります
   */
  goBackToSetting(): void {
    this.location.back();
  }

  async presentInviteMembers(): Promise<void> {
    const modal = await this.modalCtrl.create({
      component: InviteMemberComponent,
      componentProps: {
        'currentUserInfo': this.currentUser,
      },
    });
    const dismissObservable = from(modal.onDidDismiss());
    dismissObservable
      .pipe(filter((data) => data !== null))
      .pipe(concatMap(() => this.logic.fetchCompanyMembers(this.currentUser.companyID)))
      .subscribe((data) => {
        this.companyMembers = data;
      });
    return modal.present();
  }

  async presentMemberDetail(member: CurrentUser): Promise<void> {
    const modal = await this.modalCtrl.create({
      component: MemberDetailModalComponent,
      componentProps: {
        'detailUser': member,
      },
    });
    return modal.present();
  }

  searchValue(ev: CustomEvent): void {
    const searchContent = ev.detail.value;

    this.logic.fetchFilteredCompanyMembers(this.currentUser.companyID, searchContent)
      .subscribe((data) => {
        this.companyMembers = data;
      });
  }

}
