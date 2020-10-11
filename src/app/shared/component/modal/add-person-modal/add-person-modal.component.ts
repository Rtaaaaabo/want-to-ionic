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
    console.log('Add person to task');
  }

  changeCheckUser(memberId: string): void {
    const indexTargetId = this.arraySelectedPersonId.findIndex(item => item === memberId);
    console.log(indexTargetId);
    if (indexTargetId >= 0) {
      console.log('Splice');
      this.arraySelectedPersonId.splice(indexTargetId, 1);
    } else {
      console.log('Push');
      this.arraySelectedPersonId.push(memberId);
    }
    console.log(this.arraySelectedPersonId);
  }

}
