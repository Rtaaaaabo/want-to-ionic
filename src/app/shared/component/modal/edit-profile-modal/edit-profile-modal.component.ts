import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HomeLogicService } from '../../../../pages/home/logic/home-logic.service';

@Component({
  selector: 'app-edit-profile-modal',
  templateUrl: './edit-profile-modal.component.html',
  styleUrls: ['./edit-profile-modal.component.scss'],
})
export class EditProfileModalComponent implements OnInit {
  editProfileForm = new FormGroup({
    id: new FormControl(''),
    iconImage: new FormControl(''),
    userName: new FormControl('', [Validators.required]),
    positionName: new FormControl(''),
    targetEmail: new FormControl('', [Validators.required, Validators.email]),
    tel: new FormControl(''),
  });
  @Input() status: string;
  @Input() email: string;
  @Input() userId: string;
  title: string;

  @Input() user;

  constructor(
    private modalCtrl: ModalController,
    private logic: HomeLogicService,
  ) { }

  ngOnInit() {
    if (this.status === 'new') {
      this.editProfileForm.patchValue({
        id: this.userId,
        targetEmail: this.email
      });
      this.title = 'プロフィールの作成';
      console.log(this.editProfileForm.value);
    } else {
      this.editProfileForm.patchValue({
        id: this.user.id,
        targetEmail: this.user.email,
        userName: this.user.username,
        positionName: this.user.positionName,
        tel: this.user.tel,
      })
      this.title = 'プロフィールの編集';
    }
  }

  saveProfile() {
    this.logic.createUser(this.editProfileForm).subscribe(() => {
      this.modalCtrl.dismiss();
    })
  }

  dismissModal() {
    this.modalCtrl.dismiss();
  }

}
