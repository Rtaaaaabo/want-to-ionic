import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SessionService } from './service/session.service';
import { AddRoomModalComponent } from './component/modal/add-room-modal/add-room-modal.component';
import { AddTaskModalComponent } from './component/modal/add-task-modal/add-task-modal.component';
import { DeleteTaskModalComponent } from './component/modal/delete-task-modal/delete-task-modal.component';
import { EditProfileModalComponent } from './component/modal/edit-profile-modal/edit-profile-modal.component';
import { InviteMemberComponent } from 'src/app/pages/member-list/component/modal/invite-member/invite-member.component';
import { AddPersonModalComponent } from '../pages/task/component/add-person-modal/add-person-modal.component';
import { NoContentComponent } from './component/no-content/no-content.component';
import { ImagePicker } from '@ionic-native/image-picker/ngx';


@NgModule({
  declarations: [
    AddRoomModalComponent,
    AddTaskModalComponent,
    DeleteTaskModalComponent,
    EditProfileModalComponent,
    AddPersonModalComponent,
    NoContentComponent,
    InviteMemberComponent,
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
    InviteMemberComponent,
  ],
  exports: [
    AddRoomModalComponent,
    AddTaskModalComponent,
    DeleteTaskModalComponent,
    EditProfileModalComponent,
    AddPersonModalComponent,
    InviteMemberComponent,
    NoContentComponent,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [
    SessionService,
    ImagePicker,
  ]
})
export class SharedModule { }
