import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActionSheetController, ModalController } from '@ionic/angular';
import { SettingLogic } from './logic/setting.logic';
import { EditProfileModalComponent } from '../../shared/component/modal/edit-profile-modal/edit-profile-modal.component';
import { from } from 'rxjs';
import { flatMap } from 'rxjs/operators';

// interface User
interface OwnUser {
  authority: string;
  companyID: string;
  createdAt: string;
  positionName: string;
  email: string;
  id: string;
  registered?: boolean
  updatedAt: string;
  username: string;
  __typename: string;
}

@Component({
  selector: 'app-setting',
  templateUrl: './setting.page.html',
  styleUrls: ['./setting.page.scss'],
})
export class SettingPage implements OnInit {

  user: OwnUser;

  constructor(
    private actionSheetCtrl: ActionSheetController,
    private logic: SettingLogic,
    private router: Router,
    private modalCtrl: ModalController,
  ) { }

  ngOnInit() {
    this.logic.fetchCurrentUser()
      .pipe(flatMap((result) => this.logic.fetchUserInfo(result.username)))
      .subscribe((data) => {
        console.log(data);
        this.user = data;
      });
  }

  async confirmLogout() {
    const logoutActionSheet = await this.actionSheetCtrl.create({
      cssClass: 'my-custom-class',
      buttons: [
        {
          text: 'ログアウト',
          role: 'destructive',
          handler: () => {
            this.actionLogout()
          }
        },
        {
          text: 'キャンセル',
          role: 'cancel',
        }
      ]
    });
    return logoutActionSheet.present();
  }

  actionLogout() {
    this.logic.signOut().subscribe(() => this.router.navigate(['/login']));
  }

  async presentEditModal(): Promise<void> {
    const modal = await this.modalCtrl.create({
      component: EditProfileModalComponent,
      componentProps: {
        status: 'already',
        user: this.user,
      }
    });
    const observable = from(modal.onDidDismiss());
    return modal.present();
  }

}
