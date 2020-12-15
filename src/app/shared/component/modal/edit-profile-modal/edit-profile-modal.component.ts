import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HomeLogic } from '../../../../pages/home/logic/home.logic';
import { ImagePicker } from '@ionic-native/image-picker/ngx';

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
  @Input() user;
  title: string;

  constructor(
    private modalCtrl: ModalController,
    private logic: HomeLogic,
    private imagePicker: ImagePicker,
  ) { }

  ngOnInit(): void {
    this.title = 'プロフィールの作成';
    if (this.status === 'new') {
      this.editProfileForm.patchValue({
        id: this.userId,
        targetEmail: this.email
      });
    } else {
      this.title = 'プロフィールの編集';
      this.editProfileForm.patchValue({
        id: this.user.id,
        targetEmail: this.user.email,
        userName: this.user.username,
        positionName: this.user.positionName,
        tel: this.user.tel,
      })
    }
  }

  saveProfile(): void {
    if (this.status === 'new') {
      this.logic.createUser(this.editProfileForm)
        .subscribe(() => {
          this.modalCtrl.dismiss();
        });
    } else {
      this.logic.updateUser(this.editProfileForm)
        .subscribe((res) => {
          console.log('Response: ', res);
          this.modalCtrl.dismiss();
        });
    }
  }

  dismissModal(): void {
    this.modalCtrl.dismiss();
  }

  pickerImage(): void {
    const options = {
      maximumImagesCount: 1,
      width: 400,
      height: 400,
      quality: 30,
      outputType: 0,
    }
    this.imagePicker.getPictures(options)
      .then((result) => {
        console.log(result);
      })
  }

}
