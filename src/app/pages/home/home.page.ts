import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { filter, flatMap } from 'rxjs/operators';
import { EditProfileModalComponent } from 'src/app/shared/component/modal/edit-profile-modal/edit-profile-modal.component';
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
      .subscribe(() => this.presentRegistrationUser());
    // .subscribe(data => console.log(data));
  }

  async presentRegistrationUser() {
    const modal = await this.modalCtrl.create({
      component: EditProfileModalComponent,
      componentProps: {
        'status': 'new'
      },
    })
    return modal.present();
  }

}
