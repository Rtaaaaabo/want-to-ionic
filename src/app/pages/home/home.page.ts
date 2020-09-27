import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { filter, flatMap } from 'rxjs/operators';
import { AddRoomModalComponent } from 'src/app/shared/component/modal/add-room-modal/add-room-modal.component';
import { RegisterUserModalComponent } from 'src/app/shared/component/modal/register-user-modal/register-user-modal.component';
import { HomeLogicService } from './logic/home-logic.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(
    private logic: HomeLogicService,
    private modalCtrl: ModalController,
  ) { }

  ngOnInit() {
    this.logic.fetchCurrentUser()
      .pipe(flatMap((email) => this.logic.checkRegistrationUser(email)))
      .pipe(filter(({ items }) => items.length === 0))
      // .pipe(flatMap(() => this.logic.))
      .subscribe(() => this.presentRegistrationUser());
  }

  async presentRegistrationUser() {
    const modal = await this.modalCtrl.create({
      component: RegisterUserModalComponent,
    })
    return modal.present();
  }

}
