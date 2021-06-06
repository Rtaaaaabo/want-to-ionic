import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-main-registration-company',
  templateUrl: './main-registration-company.page.html',
  styleUrls: ['./main-registration-company.page.scss'],
})
export class MainRegistrationCompanyPage implements OnInit {

  constructor(
    private readonly alertCtrl: AlertController,
  ) { }

  ngOnInit() {
    this.presentCorrectToken();
  }

  async presentCorrectToken(): Promise<void> {
    const alert = await this.alertCtrl.create({
      header: '確認いたしました',
      message: '本登録を進めてください',
      buttons: ['OK'],  // Alertを閉じるのみ
    });
    await alert.present();
  }

  async presentIncorrectToken(): Promise<void> {
    const alert = await this.alertCtrl.create({
      header: '不正です',
      message: '正常な登録ができませんでした。正常な登録処理を行い、メール内容のリンクをクリックをクリックし登録作業を行ってください',
      buttons: [
        {
          text: 'OK',
          role: 'incorrect',
          handler: () => {
            console.log('LPに戻すでよいか?')
          },
        }
      ],
    });
    await alert.present();
  }
}
