import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-create-company',
  templateUrl: './create-company.page.html',
  styleUrls: ['./create-company.page.scss'],
})
export class CreateCompanyPage implements OnInit {

  constructor(
    private readonly location: Location,
  ) { }

  ngOnInit() {
  }

  goBackToSetting(): void {
    this.location.back();
  }

}
