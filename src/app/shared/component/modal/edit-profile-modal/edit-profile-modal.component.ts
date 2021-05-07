import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HomeLogic } from '../../../../pages/home/logic/home.logic';
import { Camera, CameraResultType } from '@capacitor/core';
import { from, of } from 'rxjs';
import { catchError, concatMap, filter, map, switchMap } from 'rxjs/operators';
import { IOwnUser } from '../../../../pages/setting/interface /setting.interface';

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
    keyAvatarImage: new FormControl(''),
    userName: new FormControl('', [Validators.required]),
    positionName: new FormControl(''),
    targetEmail: new FormControl('', [Validators.required, Validators.email]),
    tel: new FormControl(''),
  });

  @Input() status: string;
  @Input() email: string;
  @Input() userId: string;
  @Input() user: IOwnUser;
  @Input() name: string;
  title: string;
  iconImageUrl: string = '../../../../../assets/img/undefined.jpeg';
  keyAvatarImage: string;

  constructor(
    private readonly modalCtrl: ModalController,
    private logic: HomeLogic,
  ) { }

  ngOnInit(): void {
    if (this.status === 'new') {
      this.title = 'プロフィールの作成';
      this.editProfileForm.patchValue({
        id: this.userId,
        targetEmail: this.email,
        userName: this.name,
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

  pickerImage(): void {
    const observableIconImage = from(Camera.getPhoto(optionPicture));
    let avatarImage: string;
    observableIconImage
      .pipe(map((data) => data.dataUrl))
      .pipe(concatMap((dataUrl) => this.logic.uploadAvatarIconUrl(dataUrl, this.editProfileForm.get('id').value)))
      .pipe(map(({ key }) => avatarImage = key))
      .pipe(concatMap((key) => this.logic.getStorage(key)))
      .pipe(catchError(() => of(false)))
      .pipe(filter((result) => result))
      .subscribe((avatarUrl) => {
        this.iconImageUrl = avatarUrl;
        console.log('avatarImage', avatarImage);
        this.editProfileForm.patchValue({
          keyAvatarImage: avatarImage,
        });
      });
  }

  saveProfile(): void {
    const observableRegister = this.status === 'new' ?
      this.logic.createUser(this.editProfileForm) : this.logic.updateUser(this.editProfileForm);
    observableRegister.subscribe(() => this.modalCtrl.dismiss());
  }
}
