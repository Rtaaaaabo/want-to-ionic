import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddRoomModalComponent } from './component/modal/add-room-modal/add-room-modal.component';

@NgModule({
  declarations: [AddRoomModalComponent],
  imports: [
    CommonModule
  ],
  entryComponents: [AddRoomModalComponent],
  exports: [
    AddRoomModalComponent
  ],
})
export class SharedModule { }
