import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CreateCompanyLogic } from './logic/create-company.logic';

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
    id: new FormControl('', Validators.compose([Validators.required])),
    name: new FormControl('', Validators.compose([Validators.required])),
    email: new FormControl('', Validators.compose([Validators.required]))
  });

  constructor(
    private readonly location: Location,
    private logic: CreateCompanyLogic,
  ) { }

  ngOnInit() {
  }

  goBackToSetting(): void {
    this.location.back();
  }

  registerCompany(): void {
    // CreateCompany Serviceで会社を作成する
    // CreateUserにCompanyIDを使用して担当者のアカウントを作成する
    console.log('registerCompany');
  }

}
