import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddRoomModalComponent } from '../../../../shared/component/modal/add-room-modal/add-room-modal.component';

@Component({
  selector: 'app-list-room',
  templateUrl: './list-room.component.html',
  styleUrls: ['./list-room.component.scss'],
})
export class ListRoomComponent implements OnInit {

  roomList = [];

  constructor(
    private modalCtrl: ModalController
  ) { }

  ngOnInit() { }

  async presentAddRoomItem(companyId: string): void {
    const modal = await this.modalCtrl.create({
      component: AddRoomModalComponent,
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
