import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-add-person-modal',
  templateUrl: './add-person-modal.component.html',
  styleUrls: ['./add-person-modal.component.scss'],
})
export class AddPersonModalComponent implements OnInit {

  members;
  arraySelectedPersonId: Array<string>;

  constructor(
    private modalCtrl: ModalController,
  ) { }

  ngOnInit(): void {
    this.arraySelectedPersonId = [];
    console.log(this.members);
  }

  ngAfterViewInit(): void {
  }

  dismissModal(): void {
    this.modalCtrl.dismiss();
  }

  addPersonToTask(): void {
    this.modalCtrl.dismiss(this.arraySelectedPersonId);
  }

  changeCheckUser(memberId: string): void {
    const indexTargetId = this.arraySelectedPersonId.findIndex(item => item === memberId);
    console.log(indexTargetId);
    if (indexTargetId >= 0) {
      this.arraySelectedPersonId.splice(indexTargetId, 1);
    } else {
      this.arraySelectedPersonId.push(memberId);
    }
  }

}
