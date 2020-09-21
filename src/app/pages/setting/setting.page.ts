import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.page.html',
  styleUrls: ['./setting.page.scss'],
})
export class SettingPage implements OnInit {

  constructor(
    private actionSheetCtrl: ActionSheetController
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
  }

  actionLogout() {
    console.log('Logout');
  }

}
