import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { AlertController, IonSlides } from '@ionic/angular';
import { concatMap, filter, map } from 'rxjs/operators';
import { Company } from 'src/app/shared/service/amplify.service';
import { MainRegistrationCompanyLogic } from './logic/main-registration-company.logic';

@Component({
  selector: 'app-main-registration-company',
  templateUrl: './main-registration-company.page.html',
  styleUrls: ['./main-registration-company.page.scss'],
})
export class MainRegistrationCompanyPage implements OnInit {
  @ViewChild('companySlides', { static: false }) slides: IonSlides;
  companyInfo: Company;
  companyForm = new FormGroup({
    companyIcon: new FormControl(''),
    companyName: new FormControl('', [Validators.required]),
    companyEmail: new FormControl('', Validators.compose([Validators.required, Validators.email])),
    companyTel: new FormControl('', Validators.compose([Validators.required, Validators.pattern(/\d{10}/)])), // 数字10桁
    companyOfficer: new FormArray([new FormGroup({
      officerName: new FormControl('', Validators.compose([Validators.required])),
      officerEmail: new FormControl('', Validators.compose([Validators.required, Validators.email])),
    })])
  });

  get officerForm(): FormGroup {
    return new FormGroup({
      officerName: new FormControl('', Validators.compose([Validators.required])),
      officerEmail: new FormControl('', Validators.compose([Validators.required, Validators.email])),
    });
  }

  get officerArray(): FormArray {
    return <FormArray>this.companyForm.get('companyOfficer');
  }

  constructor(
    private readonly alertCtrl: AlertController,
    private readonly route: ActivatedRoute,
    private logic: MainRegistrationCompanyLogic,
  ) { }

  ngOnInit(): void {
    this.route.queryParams.pipe(filter(params => params.token))
      .pipe(concatMap(({ token }) => this.logic.fetchCompanyInfo(token)))
      .pipe(map(({ items }) => items))
      .subscribe((result) => {
        this.companyInfo = result[0];
        this.companyForm.patchValue({
          companyName: this.companyInfo.name,
        });
        this.officerArray.patchValue([{
          officerName: this.companyInfo.officer[0].officerName,
          officerEmail: this.companyInfo.officer[0].officerEmail,
        }])
        this.presentCorrectToken();
      })
  }

  /**
   * Tokenが正常のときに表示します
   */
  async presentCorrectToken(): Promise<void> {
    const alert = await this.alertCtrl.create({
      header: '確認いたしました',
      message: '本登録を進めてください',
      buttons: ['OK'],  // Alertを閉じるのみ
    });
    await alert.present();
  }

  /**
   * Tokenが間違っていれば、ホーム画面に戻す注意書きと一緒に表示します。
   */
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

  /**
   *  会社を本登録するします
   */
  registerCompany(): void {
    console.log(this.companyForm);
    // this.logic.updateCompanyInfo(this.companyInfo)
  }

  /**
   * 担当者を画面に追加します
   */
  addOfficerMember(): void {
    this.officerArray.push(this.officerForm);
  }

  /**
   * 担当者を画面から削除します
   * @param index FormArrayのIndex値
   */
  removeOfficer(index: number): void {
    this.officerArray.removeAt(index);
  }
}
