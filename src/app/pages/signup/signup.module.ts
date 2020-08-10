import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { SharedModule } from '../../shared/shared.module';
import { SignupPageRoutingModule } from './signup-routing.module';
import { SignupPage } from './signup.page';
import { SignupLogicService } from './logic/signup-logic.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    ReactiveFormsModule,
    SignupPageRoutingModule
  ],
  declarations: [SignupPage],
  providers: [SignupLogicService],
})
export class SignupPageModule { }
