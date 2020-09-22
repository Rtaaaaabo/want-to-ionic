import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';
import { SettingLogic } from './logic/setting-logic.service';


@Component({
  selector: 'app-setting',
  templateUrl: './setting.page.html',
  styleUrls: ['./setting.page.scss'],
})
export class SettingPage implements OnInit {

  constructor(
    private actionSheetCtrl: ActionSheetController,
    private logic: SettingLogic,
    private router: Router,
  ) { }

  ngOnInit() {
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

}
