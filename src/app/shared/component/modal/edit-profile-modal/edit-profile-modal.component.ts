import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-profile-modal',
  templateUrl: './edit-profile-modal.component.html',
  styleUrls: ['./edit-profile-modal.component.scss'],
})
export class EditProfileModalComponent implements OnInit {
  editProfile = new FormGroup({
    iconimage: new FormControl(''),
    name: new FormControl('', [Validators.required]),
    nickname: new FormControl('', [Validators.required]),
    positionName: new FormControl(''),
    email: new FormControl('', [Validators.email]),
    tel: new FormControl(''),
  })

  constructor() { }

  ngOnInit() { }

}
