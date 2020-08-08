import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AddRoomModalComponent } from './component/modal/add-room-modal/add-room-modal.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [AddRoomModalComponent],
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
  ],
  entryComponents: [AddRoomModalComponent],
  exports: [
    AddRoomModalComponent
  ],
})
export class SharedModule { }
