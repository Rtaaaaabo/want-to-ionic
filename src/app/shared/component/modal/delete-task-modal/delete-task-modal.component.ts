import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { loadingBarFill } from 'aws-amplify';

@Component({
  selector: 'app-delete-task-modal',
  templateUrl: './delete-task-modal.component.html',
  styleUrls: ['./delete-task-modal.component.scss'],
})
export class DeleteTaskModalComponent implements OnInit {
  task;

  constructor(
    private modalCtrl: ModalController,
  ) { }

  ngOnInit() { }

  onCancel() {
    this.modalCtrl.dismiss();
  }


  deleteTargetTask(taskItem) {
    this.modalCtrl.dismiss(taskItem);
  }

}
