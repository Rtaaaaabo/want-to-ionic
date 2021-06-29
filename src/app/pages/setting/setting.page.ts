import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActionSheetController, ModalController } from '@ionic/angular';
import { SettingLogic } from './logic/setting.logic';
import { EditProfileModalComponent } from '../../shared/component/modal/edit-profile-modal/edit-profile-modal.component';
import { concat, from } from 'rxjs';
import { concatMap, flatMap, map } from 'rxjs/operators';
import { GetUserQuery } from 'src/app/shared/service/amplify.service';
import { IUser } from './interface /setting.interface';
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
  user: IUser;

  constructor(
    private logic: SettingLogic,
    private readonly actionSheetCtrl: ActionSheetController,
    private readonly router: Router,
    private readonly modalCtrl: ModalController,
  ) { }

  ngOnInit(): void {
    this.logic.fetchCurrentUser()
      .pipe(concatMap(({ username }) => this.logic.fetchUserInfo(username)))
      .pipe(map((result) => this.user = result))
      .pipe(concatMap((userInfo) => this.logic.modifiedAvatarIconUrl(userInfo)))
      .subscribe((data) => {
        this.user = data;
      });
  }

  async confirmLogout(): Promise<void> {
    const logoutActionSheet = await this.actionSheetCtrl.create({
      cssClass: 'my-custom-class',
      buttons: this.ButtonEdit,
    });
    return logoutActionSheet.present();
  }

  actionLogout(): void {
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
      .pipe(concatMap((result) => this.logic.fetchUserInfo(result.username)))
      .pipe(map((result) => this.user = result))
      .pipe(concatMap((userInfo) => this.logic.modifiedAvatarIconUrl(userInfo)))
      .subscribe((data) => {
        this.user = data;
      });
    return modal.present();
  }

  /**
   * Companyに紐づくメンバーリストページへ遷移する
   */
  navigateToMemberList(): void {
    this.router.navigate(['/member-list']);
  }

  /**
   * Create Company Pageに遷移する
   * Tempで作成、LPから作成するようにする
   */
  navigateToCreateCompany(): void {
    this.router.navigate(['/create-company']);
  }
}
