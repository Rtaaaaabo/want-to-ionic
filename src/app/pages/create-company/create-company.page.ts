import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { concatMap, map } from 'rxjs/operators';
import { CreateCompanyLogic } from './logic/create-company.logic';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-create-company',
  templateUrl: './create-company.page.html',
  styleUrls: ['./create-company.page.scss'],
})

export class CreateCompanyPage implements OnInit {

  private readonly validations = {
    'name': [
      { type: 'required', message: '会社名は入力必須です' },
    ],
    'officer': [
      { type: 'required', message: '担当者の名前は入力必須です' },
    ],
    'email': [
      { type: 'required', message: '担当者のメールアドレスは必須です' },
    ]
  };

  createCompanyForm = new FormGroup({
    companyName: new FormControl('', Validators.compose([Validators.required])),
    officerName: new FormControl('', Validators.compose([Validators.required])),
    officerEmail: new FormControl('', Validators.compose([Validators.required, Validators.email])),
    officerPassword: new FormControl('', Validators.compose([Validators.required, Validators.minLength(8)])),
    officerPasswordConfirm: new FormControl('', Validators.compose([Validators.required, Validators.minLength(8)])),
    // officerPassword: new FormControl('', Validators.compose([Validators.required, Validators.minLength(8), Validators.pattern(/^([a-zA-Z0-9]{8,})$/)]))
    // 8文字以上の英数字のPassword
  }, this.checkPassword);

  constructor(
    private readonly router: Router,
    private readonly location: Location,
    private logic: CreateCompanyLogic,
  ) { }

  ngOnInit(): void { }

  checkPassword(group: FormGroup): null | { notSame: boolean } {
    let password = group.get('officerPassword').value;
    let passwordConfirm = group.get('officerPasswordConfirm').value;
    return password = passwordConfirm ? null : { notSame: true };
  }

  /**
   * Setting pageに戻ります
   */
  goBackToSetting(): void {
    this.location.back();
  }

  /**
   * 会社のアカウントを作成して、担当者のユーザーも作成します→ Authにも送る
   */
  registerCompany(): void {
    // const date = new Date();
    // const timeStamp = date.getTime();
    // const companyId = `company_${timeStamp}_${uuid()}`;
    // const companyName = this.createCompanyForm.get('companyName').value;
    // const officerName = this.createCompanyForm.get('officerName').value;
    // const officerEmail = this.createCompanyForm.get('officerEmail').value;
    // let requestContent = {
    //   id: companyId,
    //   name: `${companyName}`,
    //   officer: [{ officerEmail: officerEmail, officerName: officerName }],
    //   isRegistered: false,
    //   otp: '',
    // }
    // this.logic.generateOneTimePassword(companyId)
    //   .pipe(map((token) => requestContent.otp = token))
    //   .pipe(concatMap(() => this.logic.sendEmailForRegister(requestContent)))
    //   .pipe(concatMap(() => this.logic.createCompanyToDynamoDB(requestContent)))
    //   .subscribe(() => {
    //     this.router.navigate(['/registration-company?status=progress']);
    //   });
    this.router.navigate(['/complete-register'], { queryParams: { status: 'progress' } });
  }

}
