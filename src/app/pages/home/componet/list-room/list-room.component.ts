import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddRoomModalComponent } from '../../../../shared/component/modal/add-room-modal/add-room-modal.component';
import { HomeLogicService } from '../../logic/home-logic.service';

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
    modal.onDidDismiss().then(({ data }) => {
      console.log(data);
      this.homeLogic.createRoom(data);
    });
    return modal.present();
  }

  navigateToTask(room): void {
    console.log(room);
  }

  deleteRoom(room): void {
    console.log(room);
  }

}
