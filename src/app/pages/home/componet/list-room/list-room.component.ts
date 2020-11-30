import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { AddRoomModalComponent } from '../../../../shared/component/modal/add-room-modal/add-room-modal.component';
import { HomeLogic } from '../../logic/home.logic';
import { concat, from, Observable, of } from 'rxjs';
import { concatMap, switchMap } from 'rxjs/operators';

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
    private logic: HomeLogic,
    private router: Router,
  ) { }

  ngOnInit() {
    this.logic.listRoom('takuCloudCom')
      .subscribe((result) => {
        this.roomList = result;
      })
    this.logic.fetchCurrentUser().subscribe((data) => {
      this.currentUserId = data.sub;
      console.log('Current User ID', this.currentUserId);
    });
  }

  async presentAddRoomItem(companyId: string) {
    const modal = await this.modalCtrl.create({
      component: AddRoomModalComponent,
    });

    const observable = from(modal.onDidDismiss());
    observable
      .pipe(concatMap(({ data }) => this.logic.createRoom(data)))
      .pipe(concatMap((room) => this.logic.createUserRoomGroup(this.currentUserId, room.id)))
      .pipe(concatMap(() => this.logic.listRoom(companyId)))
      .subscribe((response) => {
        this.roomList = response;
      })
    return modal.present();
  }

  navigateToTask(room): void {
    this.router.navigate(['task', `${room.id}`]);
  }

  deleteRoom(roomId): void {
    // Roomの中にUserが自分しかいない場合はRoom自体削除する
    // Roomの中にUserが自分以外にいるならば、対象のRoomから抜ける
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
      .pipe(concatMap(() => this.logic.listRoom('takuCloudCom')))
    // SubscribeでRoomItemsにRoomListを代入する
  }

  removeOwnFromRoom(roomId: string, currentUserId: string): Observable<any> {
    return this.logic.removeMeFromRoom(roomId, currentUserId);
    // SubscribeでRoomItemsにRoomListを代入する
  }
}
