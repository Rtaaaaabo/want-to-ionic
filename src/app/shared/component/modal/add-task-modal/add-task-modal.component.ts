import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { GetTaskQuery, ListRoomGroupsQuery } from 'src/app/shared/service/amplify.service';
import { filter, switchMap, map } from 'rxjs/operators';
import { from, of } from 'rxjs';

@Component({
  selector: 'app-add-task-modal',
  templateUrl: './add-task-modal.component.html',
  styleUrls: ['./add-task-modal.component.scss'],
})
export class AddTaskModalComponent implements OnInit {

  taskForm = new FormGroup({
    nameItem: new FormControl('', [Validators.required]),
    descriptionItem: new FormControl(''),
    chargePersonId: new FormControl(''),
    scheduleDateItem: new FormControl(''),
  });

  userId: string;
  minYear: string = '';
  maxYear: string = '';
  currentIsoString: string;
  roomMembers: ListRoomGroupsQuery;

  strButton: string;

  room;
  taskDetail: GetTaskQuery;
  userList;
  hasModifyForm = false;

  hasTaskKind = {
    name: false,
    description: false,
    chargePerson: false,
    scheduleDate: false
  };

  constructor(
    private modalCtrl: ModalController,
  ) { }

  ngOnInit() {
    const currentDate = new Date();
    this.minYear = (currentDate.getFullYear()).toString();
    this.maxYear = (currentDate.getFullYear() + 1).toString();
    if (this.taskDetail !== undefined) {
      this.taskForm.patchValue({
        nameItem: this.taskDetail.title,
        descriptionItem: this.taskDetail.description,
        chargePersonId: this.taskDetail.chargePerson.id,
        scheduleDateItem: this.taskDetail.scheduleDate,
      });
      this.room = this.taskDetail.room;
      this.strButton = '更新';
    } else {
      this.currentIsoString = currentDate.toISOString();
      this.taskForm.patchValue({
        scheduleDateItem: this.currentIsoString,
        chargePersonId: this.userId,
      });
      this.strButton = '追加';
    }
    this.taskForm.get("nameItem").valueChanges
      .pipe(switchMap(() => of(!this.hasModifyForm ? this.hasModifyForm = !this.hasModifyForm : this.hasModifyForm = this.hasModifyForm)))
      .pipe(map(() => !this.hasTaskKind.name ? this.hasTaskKind.name = !this.hasTaskKind.name : this.hasTaskKind.name = this.hasTaskKind.name))
      .subscribe(() => { });
    this.taskForm.get("descriptionItem").valueChanges
      .pipe(switchMap(() => of(!this.hasModifyForm ? this.hasModifyForm = !this.hasModifyForm : this.hasModifyForm = this.hasModifyForm)))
      .pipe(map(() => !this.hasTaskKind.description ? this.hasTaskKind.description = !this.hasTaskKind.description : this.hasTaskKind.description = this.hasTaskKind.description))
      .subscribe(() => { });
    this.taskForm.get("chargePersonId").valueChanges
      .pipe(switchMap(() => of(!this.hasModifyForm ? this.hasModifyForm = !this.hasModifyForm : this.hasModifyForm = this.hasModifyForm)))
      .pipe(map(() => !this.hasTaskKind.chargePerson ? this.hasTaskKind.chargePerson = !this.hasTaskKind.chargePerson : this.hasTaskKind.chargePerson = this.hasTaskKind.chargePerson))
      .subscribe(() => { });
    this.taskForm.get("scheduleDateItem").valueChanges
      .pipe(switchMap(() => of(!this.hasModifyForm ? this.hasModifyForm = !this.hasModifyForm : this.hasModifyForm = this.hasModifyForm)))
      .pipe(map(() => !this.hasTaskKind.scheduleDate ? this.hasTaskKind.scheduleDate = !this.hasTaskKind.scheduleDate : this.hasTaskKind.chargePerson = this.hasTaskKind.scheduleDate))
      .subscribe(() => { });
  }

  dismissModal(): void {
    this.modalCtrl.dismiss();
  }

  createTaskItem(): void {
    this.modalCtrl.dismiss({
      taskValue: this.taskForm.value,
      hasTaskKind: this.hasTaskKind,
    });
  }

  changeDate(ev) {
  }

  checkStatus(): boolean {
    return true;
  }
}
