import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddRoomModalComponent } from '../../../../shared/component/modal/add-room-modal/add-room-modal.component';
import { HomeLogicService } from '../../logic/home-logic.service';
import { from } from 'rxjs';
import { flatMap } from 'rxjs/operators';

@Component({
  selector: 'app-list-room',
  templateUrl: './list-room.component.html',
  styleUrls: ['./list-room.component.scss'],
})
export class ListRoomComponent implements OnInit {

  roomList = [];

  constructor(
    private modalCtrl: ModalController,
    private homeLogic: HomeLogicService,

  ) { }

  ngOnInit() { }

  async presentAddRoomItem(companyId: string) {
    const modal = await this.modalCtrl.create({
      component: AddRoomModalComponent,
    });

    const observable = from(modal.onDidDismiss());
    observable
      .pipe(flatMap(({ data }) => this.homeLogic.createRoom(data)))
      .pipe(flatMap(() => this.homeLogic.listRoom('takuCloudCom')))
      .subscribe((response) => {
        console.log(response);
      })
    return modal.present();
  }

  navigateToTask(room): void {
    console.log(room);
  }

  deleteRoom(room): void {
    console.log(room);
  }

}
