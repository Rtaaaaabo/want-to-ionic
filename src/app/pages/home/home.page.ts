import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { from } from 'rxjs';
import { concatMap, map } from 'rxjs/operators';
import { EditProfileModalComponent } from 'src/app/shared/component/modal/edit-profile-modal/edit-profile-modal.component';
import { HomeLogic } from './logic/home.logic';
import { CurrentUser, Attribute } from './model/home.interface';
import { ResponseListRoomGroupsQueryItems } from './service/response/response.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})

export class HomePage implements OnInit {
  roomGroupsItems: Array<ResponseListRoomGroupsQueryItems>;
  currentUserAttribute: Attribute;
  currentUser: CurrentUser;

  email: string;
  attributes: {
    name: string,
    email: string,
    email_verified: boolean,
    sub: string,
  }

  constructor(
    private readonly modalCtrl: ModalController,
    private logic: HomeLogic,
  ) { }

  ngOnInit(): void {
    this.logic.fetchCurrentUser()
      .pipe(map((data) => this.currentUserAttribute = data))
      .pipe(concatMap(() => this.logic.fetchAnyUserInfoFromList(this.currentUserAttribute.email)))
      .pipe(map((items) => this.currentUser = items[0]))
      .pipe(concatMap(() => this.logic.fetchRoomList(this.currentUser.id)))
      .pipe(concatMap((data) => this.logic.setExitsRoomAndUser(data)))
      .subscribe((data) => {
        console.log(this.currentUser);
        this.roomGroupsItems = data;
      });
  }

}
