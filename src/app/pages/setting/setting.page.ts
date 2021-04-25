import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActionSheetController, ModalController } from '@ionic/angular';
import { SettingLogic } from './logic/setting.logic';
import { EditProfileModalComponent } from '../../shared/component/modal/edit-profile-modal/edit-profile-modal.component';
import { from } from 'rxjs';
import { concatMap, flatMap } from 'rxjs/operators';
import { IOwnUser } from './interface /setting.interface';
@Component({
  selector: 'app-setting',
  templateUrl: './setting.page.html',
  styleUrls: ['./setting.page.scss'],
})
export class SettingPage implements OnInit {

  ButtonEdit = [
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
  user: IOwnUser;

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
        console.log('Setting page', data);
        this.user = data;
      });
  }

  async confirmLogout() {
    const logoutActionSheet = await this.actionSheetCtrl.create({
      cssClass: 'my-custom-class',
      buttons: this.ButtonEdit,
    });
    return logoutActionSheet.present();
  }

  actionLogout() {
    this.logic.signOut()
      .subscribe(() => this.router.navigate(['/login']));
  }

  async presentEditModal(): Promise<void> {
    const modal = await this.modalCtrl.create({
      component: EditProfileModalComponent,
      componentProps: {
        'status': 'already',
        'user': this.user,
      }
    });

    const dismissObservable = from(modal.onDidDismiss());
    dismissObservable
      .pipe(concatMap(() => this.logic.fetchCurrentUser()))
      .pipe(flatMap((result) => this.logic.fetchUserInfo(result.username)))
      .subscribe((data) => {
        this.user = data;
      });
    return modal.present();
  }

}
