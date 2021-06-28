import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
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

  companyForm = new FormGroup({
    companyIcon: new FormControl(''),
    companyName: new FormControl('', [Validators.required]),
    companyEmail: new FormControl('', Validators.compose([Validators.required, Validators.email])),
    companyTel: new FormControl('', Validators.compose([Validators.required, Validators.pattern(/\d{10}/)])), // 数字10桁
    officerForm: new FormGroup({
      officerName: new FormControl('', Validators.compose([Validators.required])),
      officerEmail: new FormControl('', Validators.compose([Validators.required, Validators.email])),
      officerPassword: new FormControl('', Validators.compose([Validators.required, Validators.minLength(8)])),
      officerPasswordConfirm: new FormControl('', Validators.compose([Validators.required, Validators.minLength(8)])),
    }, this.checkPassword),
  });

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

  get aliasGetCompanyName(): FormControl {
    return <FormControl>this.companyForm.get('companyName');
  }

  get aliasGetOfficerName(): FormControl {
    return <FormControl>this.companyForm.get('officerForm.officerName');
  }

  get aliasGetOfficerEmail(): FormControl {
    return <FormControl>this.companyForm.get('officerForm.officerEmail');
  }

  get aliasGetOfficerPassword(): FormControl {
    return <FormControl>this.companyForm.get('officerForm.officerPassword');
  }

  /**
   * 会社のアカウントを作成して、担当者のユーザーも作成します→ Authにも送る
   */
  registerCompany(): void {
    const date = new Date();
    const timeStamp = date.getTime();
    const companyId = `company_${timeStamp}_${uuid()}`;
    const companyName = this.aliasGetCompanyName.value;
    const officerName = this.aliasGetOfficerName.value;
    const officerEmail = this.aliasGetOfficerEmail.value;
    const officerPassword = this.aliasGetOfficerPassword.value;
    let requestCompanyContent = {
      id: companyId,
      name: `${companyName}`,
      officer: [{
        officerEmail: officerEmail,
        officerName: officerName
      }],
      isRegistered: false,
      otp: '',
    };
    const requestUserContent = {
      name: officerName,
      email: officerEmail,
      password: officerPassword,
    }

    this.logic.createCompanyToDynamoDB(requestCompanyContent)
      .pipe(concatMap((companyId) => this.logic.entrySignUpUser(requestUserContent, companyId)))
      .subscribe(() => {
        this.router.navigate(['/confirm'], { state: { data: { email: officerEmail } } });
      });
  }

}
