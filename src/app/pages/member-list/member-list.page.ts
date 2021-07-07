import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Location } from '@angular/common';
import { from } from 'rxjs';
@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.page.html',
  styleUrls: ['./member-list.page.scss'],
})
export class MemberListPage implements OnInit {

  constructor(
    private readonly location: Location,
    private readonly modalCtrl: ModalController,
  ) { }

  ngOnInit(): void { }

  /**
   * 前ページに戻ります
   */
  goBackToSetting(): void {
    this.location.back();
  }

  async presentInviteMembers(): Promise<void> {
    const modal = await this.modalCtrl.create({
      component: 'ModalComponent',
    });
    const dismissObservable = from(modal.onDidDismiss());
    return modal.present();
  }

}
