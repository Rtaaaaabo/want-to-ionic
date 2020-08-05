import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OwnTaskPageRoutingModule } from './own-task-routing.module';

import { OwnTaskPage } from './own-task.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OwnTaskPageRoutingModule
  ],
  declarations: [OwnTaskPage]
})
export class OwnTaskPageModule {}
