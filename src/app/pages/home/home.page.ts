import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { of, from } from 'rxjs';
import { catchError, concatMap, filter, flatMap, map } from 'rxjs/operators';
import { EditProfileModalComponent } from 'src/app/shared/component/modal/edit-profile-modal/edit-profile-modal.component';
import { HomeLogic } from './logic/home.logic';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})

export class HomePage implements OnInit {
  email: string;
  attributes: {
    email: string,
    email_verified: boolean,
    sub: string,
  }

  constructor(
    private logic: HomeLogic,
    private modalCtrl: ModalController,
  ) { }

  ngOnInit(): void { }

  ionViewWillEnter() {
    this.logic.fetchCurrentUser()
      .pipe(map((attributes) => {
        this.attributes = attributes;
      }))
      .pipe(flatMap(() => this.logic.checkRegistrationUser(this.attributes)))
      .pipe(filter(({ items }) => items.length === 0))
      .subscribe((result) => {
        console.log('homePage', result);
        // this.presentRegistrationUser()
      });
  }

  async presentRegistrationUser(): Promise<void> {
    const modal = await this.modalCtrl.create({
      component: EditProfileModalComponent,
      componentProps: {
        'status': 'new',
        'email': this.attributes.email,
        'userId': this.attributes.sub,
      },
    })
    const dismissObservable = from(modal.onDidDismiss());
    dismissObservable
      .pipe(concatMap(() => this.logic.fetchCurrentUser()))
      .pipe(map((attributes) => {
        this.attributes = attributes;
      }));
    return modal.present();
  }

}
