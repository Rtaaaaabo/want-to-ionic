import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { AddRoomModalComponent } from '../../../../shared/component/modal/add-room-modal/add-room-modal.component';
import { HomeLogic } from '../../logic/home.logic';
import { concat, from, Observable } from 'rxjs';
import { concatMap, switchMap, map, filter } from 'rxjs/operators';
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
  ) { }

  ngOnInit() {
    this.logic.fetchCurrentUser()
      .pipe(map((data) => this.currentUserId = data.sub))
      .pipe((concatMap(() => this.logic.fetchRoomList(this.currentUserId))))
      .pipe(concatMap((data) => this.logic.setExitsRoom(data)))
      .subscribe((data: Array<ResponseListRoomGroupsQueryItems>) => {
        this.roomGroupsItems = data;
        console.log('roomGroupsItems', this.roomGroupsItems);
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
      .subscribe((response) => {
        this.roomGroupsItems = response;
      })
    return modal.present();
  }

  navigateToTask(room): void {
    this.router.navigate(['task', `${room.id}`]);
  }

  deleteRoom(roomId): void {
    this.logic.fetchRoomMembers(roomId, this.currentUserId)
      .pipe(switchMap((data) => data.length === 0 ?
        this.deleteRoomItem(roomId) : this.removeOwnFromRoom(roomId, this.currentUserId))
      )
      .subscribe((result) => {
        console.log(result);
      })
  }

  deleteRoomItem(roomId: string): Observable<any> {
    return this.logic.deleteRoomItem(roomId)
      .pipe(concatMap(() => this.logic.fetchRoomList(this.currentUserId)))
    // .pipe(concatMap(() => this.logic.listRoom('takuCloudCom')))
    // SubscribeでRoomItemsにRoomListを代入する
  }

  removeOwnFromRoom(roomId: string, currentUserId: string): Observable<any> {
    return this.logic.removeMeFromRoom(roomId, currentUserId);
    // SubscribeでRoomItemsにRoomListを代入する
  }
}
