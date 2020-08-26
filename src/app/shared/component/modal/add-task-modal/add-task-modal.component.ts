import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-task-modal',
  templateUrl: './add-task-modal.component.html',
  styleUrls: ['./add-task-modal.component.scss'],
})
export class AddTaskModalComponent implements OnInit {

  taskItemForm = new FormGroup({
    nameItem: new FormControl('', [Validators.required]),
    descriptionItem: new FormControl(''),
    scheduleDateItem: new FormControl(''),
  });

  room;

  minYear: string = '';
  maxYear: string = '';
  currentIsoString: string;

  constructor(
    private modalCtrl: ModalController,
  ) { }

  ngOnInit() {
    const currentDate = new Date();
    this.minYear = (currentDate.getFullYear()).toString();
    this.maxYear = (currentDate.getFullYear() + 1).toString();
    this.currentIsoString = currentDate.toISOString();
    this.taskItemForm.patchValue({
      scheduleDateItem: this.currentIsoString
    })
  }

  dismissModal(): void {
    this.modalCtrl.dismiss();
  }

  createTaskItem(): void {
    this.modalCtrl.dismiss(this.taskItemForm.value);
  }

  changeDate() {
    console.log('changeDate');
  }

}
