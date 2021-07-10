import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Location } from '@angular/common';
import { from } from 'rxjs';
import { map, concatMap } from 'rxjs/operators';
import { MemberListLogic } from './logic/member-list.logic';
import { InviteMemberComponent } from './component/modal/invite-member/invite-member.component';
import { CurrentUser, Attribute } from './models/member-list.interface';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.page.html',
  styleUrls: ['./member-list.page.scss'],
})
export class MemberListPage implements OnInit {
  currentUserAttribute: Attribute;
  currentUser: CurrentUser;
  companyId: string;

  constructor(
    private logic: MemberListLogic,
    private readonly location: Location,
    private readonly modalCtrl: ModalController,
  ) { }

  ngOnInit(): void {
    this.logic.fetchCurrentUser()
      .pipe(map((data) => this.currentUserAttribute = data))
      .pipe(concatMap(() => this.logic.fetchAnyUserInfoFromList(this.currentUserAttribute.email)))
      .pipe(map(({ items }) => this.currentUser = items[0]))
      .subscribe((data) => console.log('ngOnInit data', data));
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
      }
    });
    const dismissObservable = from(modal.onDidDismiss());
    return modal.present();
  }

}
