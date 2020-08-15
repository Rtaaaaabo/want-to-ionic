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
  })

  constructor(
    private modalCtrl: ModalController,
  ) { }

  ngOnInit() {
    const dateTime = new Date();
    const isoString = dateTime.toISOString();
    console.log(isoString);

  }

  dismissModal(): void {
    this.modalCtrl.dismiss();
  }

  createTaskItem(): void {
    console.log('Date', new Date());

    console.log(this.taskItemForm.value);
    this.modalCtrl.dismiss(this.taskItemForm.value);
  }

}
