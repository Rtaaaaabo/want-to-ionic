import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormGroup, FormControl, Validators } from '@angular/forms';
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
    officerEmail: new FormControl('', Validators.compose([Validators.required, Validators.email]))
  });

  constructor(
    private readonly location: Location,
    private logic: CreateCompanyLogic,
  ) { }

  ngOnInit() {
  }

  /**
   * Setting pageに戻ります
   */
  goBackToSetting(): void {
    this.location.back();
  }

  /**
   * 会社のアカウントを作成して、担当者のユーザーも作成します
   */
  registerCompany(): void {
    const date = new Date();
    const timeStamp = date.getTime();
    const officerName = this.createCompanyForm.get('officerName').value;
    const officerEmail = this.createCompanyForm.get('officerEmail').value;
    const requestContent = {
      id: `company_${timeStamp}_${uuid()}`,
      name: officerName,
      officerEmail: officerEmail,
    }
    this.logic.createCompany(requestContent)
      .pipe(concatMap((companyId) => this.logic.createUserWithCompanyId(companyId, officerName, officerEmail)));
  }

}
