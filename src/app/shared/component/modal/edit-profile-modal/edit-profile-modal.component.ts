import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-profile-modal',
  templateUrl: './edit-profile-modal.component.html',
  styleUrls: ['./edit-profile-modal.component.scss'],
})
export class EditProfileModalComponent implements OnInit {
  editProfileForm = new FormGroup({
    iconImage: new FormControl(''),
    userName: new FormControl('', [Validators.required]),
    positionName: new FormControl(''),
    targetEmail: new FormControl('', [Validators.required, Validators.email]),
    tel: new FormControl(''),
  });
  @Input() status: string;
  @Input() email: string;
  title: string;

  constructor(
    private modalCtrl: ModalController,
  ) {

  }

  ngOnInit() {
    if (this.status === 'new') {
      this.editProfileForm.patchValue({
        targetEmail: this.email
      });
      this.title = 'プロフィールの作成'
    } else {
      this.title = 'プロフィールの編集'
    }
  }

  saveProfile() {
    console.log(this.editProfileForm);
  }

  dismissModal() {
    this.modalCtrl.dismiss();
  }

}
