import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RegistrationCompanyPageRoutingModule } from './registration-company-routing.module';
import { RegistrationCompanyPage } from './registration-company.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistrationCompanyPageRoutingModule,
    SharedModule,
  ],
  declarations: [RegistrationCompanyPage]
})
export class RegistrationCompanyPageModule { }
