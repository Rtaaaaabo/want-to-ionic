import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MainRegistrationCompanyPageRoutingModule } from './main-registration-company-routing.module';

import { MainRegistrationCompanyPage } from './main-registration-company.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MainRegistrationCompanyPageRoutingModule
  ],
  declarations: [MainRegistrationCompanyPage]
})
export class MainRegistrationCompanyPageModule {}
