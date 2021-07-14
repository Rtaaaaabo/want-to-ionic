import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { concatMap, filter } from 'rxjs/operators';
import { CurrentUser } from 'src/app/pages/member-list/models/member-list.interface';
import { MemberListLogic } from 'src/app/pages/member-list/logic/member-list.logic';

@Component({
  selector: 'app-member-detail-modal',
  templateUrl: './member-detail-modal.component.html',
  styleUrls: ['./member-detail-modal.component.scss'],
})
export class MemberDetailModalComponent implements OnInit {
  @Input() detailUser: CurrentUser;
  userIconImageUrl: string;
  defaultIconImageUrl = '../../../../../assets/img/undefined.jpeg';

  constructor(
    private readonly modalCtrl: ModalController,
    private readonly logic: MemberListLogic,
  ) { }

  ngOnInit(): void {
    this.logic.modifiedAvatarIconUrl(this.detailUser.iconImage).subscribe(data => {
      this.userIconImageUrl = data;
    })
  }

  dismissModal(): void {
    this.modalCtrl.dismiss();
  }

}
