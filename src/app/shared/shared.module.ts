import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AddRoomModalComponent } from './component/modal/add-room-modal/add-room-modal.component';
import { AddTaskModalComponent } from './component/modal/add-task-modal/add-task-modal.component';
import { SessionService } from './service/session.service';
import { SharedLogicService } from './logic/shared-logic.service';
import { DeleteTaskModalComponent } from './component/modal/delete-task-modal/delete-task-modal.component';

@NgModule({
  declarations: [
    AddRoomModalComponent,
    AddTaskModalComponent,
    DeleteTaskModalComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
  ],
  entryComponents: [
    AddRoomModalComponent,
    AddTaskModalComponent,
    DeleteTaskModalComponent,
  ],
  exports: [
    AddRoomModalComponent,
    AddTaskModalComponent,
    DeleteTaskModalComponent,
    ReactiveFormsModule,
  ],
  providers: [
    SessionService,
    SharedLogicService,
  ]
})
export class SharedModule { }
