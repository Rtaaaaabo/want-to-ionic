import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { AddRoomModalComponent } from '../../../../shared/component/modal/add-room-modal/add-room-modal.component';
import { HomeLogic } from '../../logic/home.logic';
import { from } from 'rxjs';
import { concatMap } from 'rxjs/operators';

@Component({
  selector: 'app-list-room',
  templateUrl: './list-room.component.html',
  styleUrls: ['./list-room.component.scss'],
})
export class ListRoomComponent implements OnInit {

  roomList: Array<any>;
  currentUserId: string;

  constructor(
    private modalCtrl: ModalController,
    private homeLogic: HomeLogic,
    private router: Router,
  ) { }

  ngOnInit() {
    this.homeLogic.listRoom('takuCloudCom')
      .subscribe((result) => {
        this.roomList = result;
      })
    this.homeLogic.fetchCurrentUser().subscribe((data) => {
      this.currentUserId = data.sub;
    });
  }

  async presentAddRoomItem(companyId: string) {
    const modal = await this.modalCtrl.create({
      component: AddRoomModalComponent,
    });

    const observable = from(modal.onDidDismiss());
    observable
      .pipe(concatMap(({ data }) => this.homeLogic.createRoom(data)))
      .pipe(concatMap((room) => this.homeLogic.createUserRoomGroup(this.currentUserId, room.id)))
      .pipe(concatMap(() => this.homeLogic.listRoom(companyId)))
      .subscribe((response) => {
        this.roomList = response;
      })
    return modal.present();
  }

  navigateToTask(room): void {
    this.router.navigate(['task', `${room.id}`]);
  }

  deleteRoom(roomId): void {
    this.homeLogic.deleteRoomItem(roomId)
      .pipe(concatMap(() =>
        this.homeLogic.listRoom('takuCloudCom')))
      .subscribe((response) => {
        this.roomList = response;
      })
  }

}
