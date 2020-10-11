import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-add-person-modal',
  templateUrl: './add-person-modal.component.html',
  styleUrls: ['./add-person-modal.component.scss'],
})
export class AddPersonModalComponent implements OnInit {

  members;

  constructor(
    private modalCtrl: ModalController,
  ) { }

  ngOnInit(): void {
    console.log(this.members);
  }

  ngAfterViewInit(): void {
  }

  dismissModal(): void {
    this.modalCtrl.dismiss();
  }

}
