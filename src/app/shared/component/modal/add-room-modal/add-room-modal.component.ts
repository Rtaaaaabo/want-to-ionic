import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-room-modal',
  templateUrl: './add-room-modal.component.html',
  styleUrls: ['./add-room-modal.component.scss'],
})
export class AddRoomModalComponent implements OnInit {

  roomItemGroup = new FormGroup({
    nameItem: new FormControl('', [Validators.required]),
    descriptionItem: new FormControl(''),
  });

  constructor(
    private modalCtrl: ModalController,
    private navParams: NavParams,
  ) { }

  get nameItem() {
    return this.roomItemGroup.get('nameItem');
  }

  get descriptionItem() {
    return this.roomItemGroup.get('descriptionItem');
  }

  ngOnInit() { }

  dismissModal() {
    this.modalCtrl.dismiss();
  }

  createItem() {
    this.modalCtrl.dismiss(this.roomItemGroup.value);
  }

}
