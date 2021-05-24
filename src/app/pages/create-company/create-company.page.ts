import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-company',
  templateUrl: './create-company.page.html',
  styleUrls: ['./create-company.page.scss'],
})

export class CreateCompanyPage implements OnInit {

  private readonly validations = {
    'name': [
      { type: 'required', message: 'お名前は入力必須です' },
    ],
    'domain': [
      { type: 'required', message: '会社のドメインは入力必須です' },
    ],
    'email': [
      { type: 'required', message: 'メールアドレスは必須です' },
    ]
  };

  createCompanyForm = new FormGroup({
    id: new FormControl('', Validators.compose([Validators.required])),
    name: new FormControl('', Validators.compose([Validators.required])),
    domain: new FormControl('', Validators.compose([Validators.required]))
  });

  constructor(
    private readonly location: Location,
  ) { }

  ngOnInit() {
  }

  goBackToSetting(): void {
    this.location.back();
  }

}
