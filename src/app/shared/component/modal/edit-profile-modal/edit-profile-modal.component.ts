import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
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
  });
  @Input() status: string;
  title: string;

  constructor(
    private modalCtrl: ModalController,
  ) {
  }

  ngOnInit() {
    if (this.status === 'new') {
      this.title = 'プロフィールの作成'
    } else {
      this.title = 'プロフィールの編集'
    }
  }

  dismissModal() {
    this.modalCtrl.dismiss();
  }

}
