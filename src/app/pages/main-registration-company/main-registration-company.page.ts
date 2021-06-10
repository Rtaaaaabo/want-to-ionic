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
  companyOfficer = new FormArray([]);
  companyInfo: Company;
  companyForm = new FormGroup({
    companyIcon: new FormControl(''),
    companyName: new FormControl('', [Validators.required]),
    companyEmail: new FormControl('', Validators.compose([Validators.required, Validators.email])),
    companyTel: new FormControl('', Validators.compose([Validators.required, Validators.pattern(/\d{10}/)])), // 数字10桁
    companyOfficer: new FormArray([new FormGroup({
      officerName: new FormControl(''),
      officerEmail: new FormControl('', Validators.compose([Validators.email]))
    })])
  });

  get aliasCompanyIcon(): FormControl {
    return <FormControl>this.companyForm.get('companyIcon');
  }

  get aliasOfficer(): FormArray {
    return <FormArray>this.companyOfficer;
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
        // this.companyOfficer.push(new FormGroup({
        //   officerName: new FormControl(this.companyInfo.officer[0].officerName),
        //   officerEmail: new FormControl(this.companyInfo.officer[0].officerEmail),
        // }));
        console.log('[companyForm]', this.companyForm.value);
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

  SlideToRegisterOfficer(): void {
    this.slides.slideNext();
  }

  addOfficerMember() {
    // this.aliasOfficer.push(this.)
  }
}
