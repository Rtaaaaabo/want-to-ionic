import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-profile-modal',
  templateUrl: './edit-profile-modal.component.html',
  styleUrls: ['./edit-profile-modal.component.scss'],
})
export class EditProfileModalComponent implements OnInit {
  editProfile = new FormGroup({
    iconImage: new FormControl(''),
    name: new FormControl('', [Validators.required]),
    positionName: new FormControl(''),
    email: new FormControl('', [Validators.email]),
    tel: new FormControl(''),
  })

  constructor(
    private modalCtrl: ModalController,
  ) { }

  ngOnInit() { }

  dismissModal() {
    this.modalCtrl.dismiss();
  }

}
