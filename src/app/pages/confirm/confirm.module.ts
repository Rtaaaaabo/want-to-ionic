import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ConfirmPageRoutingModule } from './confirm-routing.module';
import { ConfirmPage } from './confirm.page';
import { ConfirmLogic } from './logic/confirm.logic';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    ConfirmPageRoutingModule
  ],
  declarations: [ConfirmPage],
  providers: [ConfirmLogic],
})
export class ConfirmPageModule { }
