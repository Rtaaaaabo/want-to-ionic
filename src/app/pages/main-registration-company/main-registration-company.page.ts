import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { concatMap, filter, take, map } from 'rxjs/operators';
import { Company } from 'src/app/shared/service/amplify.service';
import { MainRegistrationCompanyLogic } from './logic/main-registration-company.logic';

@Component({
  selector: 'app-main-registration-company',
  templateUrl: './main-registration-company.page.html',
  styleUrls: ['./main-registration-company.page.scss'],
})
export class MainRegistrationCompanyPage implements OnInit {
  companyInfo: Company;

  constructor(
    private readonly alertCtrl: AlertController,
    private readonly route: ActivatedRoute,
    private logic: MainRegistrationCompanyLogic,
  ) { }

  ngOnInit() {
    this.route.queryParams.pipe(filter(params => params.token))
      .pipe(concatMap(({ token }) => this.logic.fetchCompanyInfo(token)))
      .pipe(map(({ items }) => items))
      .subscribe((result) => {
        this.companyInfo = result[0];
        console.log('companyInfo: ', this.companyInfo);
        this.presentCorrectToken();
      })
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
