import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HomeLogic } from '../../../../pages/home/logic/home.logic';
import { Camera, CameraResultType } from '@capacitor/core';
import { concatMap } from 'rxjs/operators';

interface OwnUser {
  authority: string;
  companyID: string;
  createdAt: string;
  positionName: string;
  iconImage: string;
  email: string;
  id: string;
  registered?: boolean
  updatedAt: string;
  username: string;
  tel: string;
  __typename: string;
}

const optionPicture = {
  quality: 50,
  allowEditing: true,
  resultType: CameraResultType.DataUrl,
  promptLabelPicture: 'カメラ',
  promptLabelHeader: 'カメラ',
  promptLabelPhoto: 'ライブラリから',
  promptLabelCancel: 'キャンセル',
};

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
  @Input() user: OwnUser;
  title: string;
  iconImage: string;

  constructor(
    private modalCtrl: ModalController,
    private logic: HomeLogic,
  ) { }

  ngOnInit(): void {
    if (this.status === 'new') {
      this.title = 'プロフィールの作成';
      this.editProfileForm.patchValue({
        id: this.user.id,
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
      });
    }
  }

  dismissModal(): void {
    this.modalCtrl.dismiss();
  }

  async pickerImage(): Promise<void> {
    let iconImage = await Camera.getPhoto(optionPicture);
    const avatarBase64Data = await iconImage.dataUrl;
    this.logic.fetchAvatarIconUrl(avatarBase64Data, this.user.id)
      .pipe(concatMap(({ key: awsFilePath }) => this.logic.getStorage(awsFilePath)))
      .subscribe((avatarUrl) => {
        this.editProfileForm.patchValue({
          id: this.user.id,
          targetEmail: this.user.email,
          userName: this.user.username,
          positionName: this.user.positionName,
          tel: this.user.tel,
          iconImage: avatarUrl,
        });
      });
  }

  saveProfile(): void {
    const observableRegister = this.status === 'new' ? this.logic.createUser(this.editProfileForm) : this.logic.updateUser(this.editProfileForm);
    observableRegister.subscribe(() => this.modalCtrl.dismiss());
  }
}
