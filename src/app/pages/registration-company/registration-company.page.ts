import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { AlertController, IonSlides } from '@ionic/angular';
import { concatMap, filter, map } from 'rxjs/operators';
import { Company } from 'src/app/shared/service/amplify.service';
import { RegistrationCompanyLogic } from './logic/registration-company.logic';

@Component({
  selector: 'app-registration-company',
  templateUrl: './registration-company.page.html',
  styleUrls: ['./registration-company.page.scss'],
})
export class RegistrationCompanyPage implements OnInit {
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
    })]),
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

  token: string;

  constructor(
    private readonly alertCtrl: AlertController,
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private logic: RegistrationCompanyLogic,
  ) { }

  ngOnInit(): void {
    this.route.queryParams.pipe(filter(params => params.token))
      .pipe(map(({ token }) => this.token = token))
      .pipe(concatMap((token) => this.logic.fetchCompanyInfo(token)))
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
            this.router.navigate(['/create-company']);
          },
        }
      ],
    });
    await alert.present();
  }

  /**
   *  会社を本登録します
   */
  registerCompany(): void {
    this.logic.updateCompanyInfo(this.companyInfo, this.companyForm.value)
      // Officerに会員登録用のURLをメール送信し、そこにはCompanyと紐付けられるようにする
      .pipe(concatMap(() => this.logic.sendToOfficerForRegister(this.companyInfo, this.officerArray.value)))
      //   // これはNgOnInitの処理とする
      //   .pipe(concatMap(() => this.logic.isValidOneTimePassword(this.token, this.companyInfo.id)))

      .subscribe(() => {
        this.router.navigate(['/complete-register'], { queryParams: { status: 'done' } });
      });
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
