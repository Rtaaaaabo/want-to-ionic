import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AddRoomModalComponent } from './component/modal/add-room-modal/add-room-modal.component';
import { IonicModule } from '@ionic/angular';
import { SessionService } from './service/session.service';

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
  providers: [
    SessionService
  ]
})
export class SharedModule { }
