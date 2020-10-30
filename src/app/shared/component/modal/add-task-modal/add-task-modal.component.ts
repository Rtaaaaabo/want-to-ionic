import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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

  room;
  taskDetail;
  userList;
  roomMembers;


  constructor(
    private modalCtrl: ModalController,
  ) { }

  ngOnInit() {
    const currentDate = new Date();
    this.minYear = (currentDate.getFullYear()).toString();
    this.maxYear = (currentDate.getFullYear() + 1).toString();
    if (this.taskDetail !== undefined) {
      console.log(this.taskDetail);
      this.taskForm.patchValue({
        nameItem: this.taskDetail.title,
        descriptionItem: this.taskDetail.description,
        chargePersonId: this.taskDetail.chargePerson.id,
        scheduleDateItem: this.taskDetail.scheduleDate,
      });
      this.room = this.taskDetail.room;
    } else {

      this.currentIsoString = currentDate.toISOString();
      this.taskForm.patchValue({
        scheduleDateItem: this.currentIsoString,
        chargePersonId: this.userId
      });
    }
  }

  dismissModal(): void {
    this.modalCtrl.dismiss();
  }

  createTaskItem(): void {
    this.modalCtrl.dismiss(this.taskForm.value);
  }

  changeDate() {
    console.log('changeDate');
  }

}
