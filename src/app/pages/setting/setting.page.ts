import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActionSheetController, ModalController } from '@ionic/angular';
import { SettingLogic } from './logic/setting.logic';
import { EditProfileModalComponent } from '../../shared/component/modal/edit-profile-modal/edit-profile-modal.component';
import { from } from 'rxjs';
import { concatMap, map } from 'rxjs/operators';
import { IUser, Attribute, CurrentUser } from './interface/setting.interface';
@Component({
  selector: 'app-setting',
  templateUrl: './setting.page.html',
  styleUrls: ['./setting.page.scss'],
})
export class SettingPage implements OnInit {

  isAdmin: boolean = false;

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

  currentUserAttribute: Attribute;
  currentUser: CurrentUser;
  currentUserIcon: string | null;

  constructor(
    private logic: SettingLogic,
    private readonly actionSheetCtrl: ActionSheetController,
    private readonly router: Router,
    private readonly modalCtrl: ModalController,
  ) { }

  ngOnInit(): void {
    this.logic.fetchCurrentUser()
      .pipe(map((data) => this.currentUserAttribute = data))
      .pipe(concatMap(() => this.logic.fetchAnyUserInfoFromList(this.currentUserAttribute.email)))
      .pipe(map(({ items }) => this.currentUser = items[0]))
      .pipe(concatMap(() => this.logic.modifiedAvatarIconUrl(this.currentUser.iconImage)))
      .subscribe((data) => {
        if (this.currentUser.email === 'r.taaaaabo+wantto01@gmail.com') {
          this.isAdmin = true;
        }
        this.currentUserIcon = data;
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
        'user': this.currentUser,
        'userIcon': this.currentUserIcon,
      }
    });
    const dismissObservable = from(modal.onDidDismiss());
    dismissObservable
      .pipe(concatMap(() => this.logic.fetchUserInfo(this.currentUser.id)))
      .pipe(map((result) => this.currentUser = result))
      .pipe(concatMap(() => this.logic.modifiedAvatarIconUrl(this.currentUser.iconImage)))
      .subscribe((data) => {
        this.currentUserIcon = data;
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
