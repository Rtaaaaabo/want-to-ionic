import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { CreateCompanyPageRoutingModule } from './create-company-routing.module';
import { CreateCompanyPage } from './create-company.page';
import { SharedModule } from 'src/app/shared/shared.module';
@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    CreateCompanyPageRoutingModule,
    SharedModule,
  ],
  declarations: [CreateCompanyPage]
})
export class CreateCompanyPageModule { }
