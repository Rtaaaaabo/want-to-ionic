import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CompanyMember } from 'src/app/pages/member-list/models/member-list.interface';

@Component({
  selector: 'app-member-detail-modal',
  templateUrl: './member-detail-modal.component.html',
  styleUrls: ['./member-detail-modal.component.scss'],
})
export class MemberDetailModalComponent implements OnInit {
  @Input() detailUser: CompanyMember;

  constructor(
    private readonly modalCtrl: ModalController,
  ) { }

  ngOnInit() {
    console.log(this.detailUser);
  }

  dismissModal(): void {
    this.modalCtrl.dismiss();
  }

}
