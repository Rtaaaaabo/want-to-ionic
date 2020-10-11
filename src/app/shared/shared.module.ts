import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SessionService } from './service/session.service';
import { SharedLogicService } from './logic/shared-logic.service';
import { AddRoomModalComponent } from './component/modal/add-room-modal/add-room-modal.component';
import { AddTaskModalComponent } from './component/modal/add-task-modal/add-task-modal.component';
import { DeleteTaskModalComponent } from './component/modal/delete-task-modal/delete-task-modal.component';
import { EditProfileModalComponent } from './component/modal/edit-profile-modal/edit-profile-modal.component';
import { AddPersonModalComponent } from './component/modal/add-person-modal/add-person-modal.component';
import { ImagePicker } from '@ionic-native/image-picker/ngx';


@NgModule({
  declarations: [
    AddRoomModalComponent,
    AddTaskModalComponent,
    DeleteTaskModalComponent,
    EditProfileModalComponent,
    AddPersonModalComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  entryComponents: [
    AddRoomModalComponent,
    AddTaskModalComponent,
    DeleteTaskModalComponent,
    EditProfileModalComponent,
    AddPersonModalComponent,
  ],
  exports: [
    AddRoomModalComponent,
    AddTaskModalComponent,
    DeleteTaskModalComponent,
    EditProfileModalComponent,
    AddPersonModalComponent,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [
    SessionService,
    SharedLogicService,
    ImagePicker,
  ]
})
export class SharedModule { }
