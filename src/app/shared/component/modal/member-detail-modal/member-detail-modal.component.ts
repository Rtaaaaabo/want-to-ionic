import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { concatMap, filter } from 'rxjs/operators';
import { CompanyMember } from 'src/app/pages/member-list/models/member-list.interface';
import { MemberListLogic } from 'src/app/pages/member-list/logic/member-list.logic';

@Component({
  selector: 'app-member-detail-modal',
  templateUrl: './member-detail-modal.component.html',
  styleUrls: ['./member-detail-modal.component.scss'],
})
export class MemberDetailModalComponent implements OnInit {
  @Input() detailUser: CompanyMember;
  userIconImageUrl: string;
  defaultIconImageUrl = '../../../../../assets/img/undefined.jpeg';

  constructor(
    private readonly modalCtrl: ModalController,
    private readonly logic: MemberListLogic,
  ) { }

  ngOnInit(): void {
    this.logic.fetchMember(this.detailUser.id)
      .pipe(filter((result) => result === null))
      .pipe(concatMap((member) => this.logic.modifiedAvatarIconUrl(member.iconImage)))
      .subscribe((data) => {
        console.log('[modifiedAvatarIconUrl]', data);
        this.userIconImageUrl = data;
      })
  }

  dismissModal(): void {
    this.modalCtrl.dismiss();
  }

}
