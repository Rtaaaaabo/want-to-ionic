import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, AlertController } from '@ionic/angular';
import { AddRoomModalComponent } from '../../../../shared/component/modal/add-room-modal/add-room-modal.component';
import { HomeLogic } from '../../logic/home.logic';
import { from, Observable } from 'rxjs';
import { concatMap, switchMap, map } from 'rxjs/operators';
import { ResponseListRoomGroupsQueryItems } from '../../service/reponse/response.model';

@Component({
  selector: 'app-list-room',
  templateUrl: './list-room.component.html',
  styleUrls: ['./list-room.component.scss'],
})
export class ListRoomComponent implements OnInit {
  currentUserId: string;
  roomGroupsItems: Array<ResponseListRoomGroupsQueryItems>;
  companyId = 'takuCloudCon';

  constructor(
    private modalCtrl: ModalController,
    private logic: HomeLogic,
    private router: Router,
    private readonly alertCtrl: AlertController,
  ) { }

  ngOnInit() {
    this.logic.fetchCurrentUser()
      .pipe(map((data) => this.currentUserId = data.sub))
      .pipe((concatMap(() => this.logic.fetchRoomList(this.currentUserId))))
      .pipe(concatMap((data) => this.logic.setExitsRoomAndUser(data)))
      .subscribe((data: Array<ResponseListRoomGroupsQueryItems>) => {
        this.roomGroupsItems = data;
      })
  }

  async presentAddRoomItem(companyId: string) {
    const modal = await this.modalCtrl.create({
      component: AddRoomModalComponent,
    });

    const observable = from(modal.onDidDismiss());
    observable
      .pipe(concatMap(({ data }) => this.logic.createRoom(data)))
      .pipe(concatMap((room) => this.logic.createUserRoomGroup(this.currentUserId, room.id)))
      .pipe(concatMap(() => this.logic.fetchRoomList(this.currentUserId)))
      .pipe(concatMap((data) => this.logic.setExitsRoomAndUser(data)))
      .subscribe((response) => {
        this.roomGroupsItems = response;
      })
    return modal.present();
  }

  navigateToTask(room): void {
    this.router.navigate(['task', `${room.id}`]);
  }

  deleteRoom(roomId, slideItem): void {
    this.logic.fetchRoomMembers(roomId, this.currentUserId)
      .pipe(switchMap((data) => data.length === 0 ?
        this.deleteRoomItem(roomId) : this.removeOwnFromRoom(roomId, this.currentUserId))
      )
      .pipe(concatMap(() => this.logic.fetchRoomList(this.currentUserId)))
      .pipe(concatMap((data) => this.logic.setExitsRoomAndUser(data)))
      .subscribe((result) => {
        this.roomGroupsItems = result;
        slideItem.close();
      });
  }

  async presentDeleteAlert(item, slideItem): Promise<void> {
    const alert = await this.alertCtrl.create({
      header: '項目を削除します',
      subHeader: `${item.room.name}を削除します。よろしいでしょうか？`,
      message: '参加者がいなければ完全に消えます。参加者がいる場合は退出します。',
      buttons: [
        {
          text: 'キャンセル',
          role: 'cancel',
          handler: () => {
            slideItem.close();
          }
        },
        {
          text: 'OK',
          role: 'ok',
          handler: () => {
            this.deleteRoom(item.roomID, slideItem);
          }
        }
      ]
    });
    alert.present();
  }

  deleteRoomItem(roomId: string): Observable<any> {
    return this.logic.deleteRoomItem(roomId)
  }

  removeOwnFromRoom(roomId: string, currentUserId: string): Observable<any> {
    return this.logic.removeMeFromRoom(roomId, currentUserId);
  }
}
