import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, AlertController, IonItemSliding } from '@ionic/angular';
import { AddRoomModalComponent } from '../../../../shared/component/modal/add-room-modal/add-room-modal.component';
import { HomeLogic } from '../../logic/home.logic';
import { from } from 'rxjs';
import { concatMap, switchMap, map } from 'rxjs/operators';
import { ResponseListRoomGroupsQueryItems } from '../../service/reponse/response.model';
import { Room, RoomGroup } from 'src/app/shared/service/amplify.service';

@Component({
  selector: 'app-list-room',
  templateUrl: './list-room.component.html',
  styleUrls: ['./list-room.component.scss'],
})
export class ListRoomComponent implements OnInit {
  currentUserId: string;
  roomGroupsItems: Array<ResponseListRoomGroupsQueryItems>;

  constructor(
    private logic: HomeLogic,
    private readonly modalCtrl: ModalController,
    private readonly router: Router,
    private readonly alertCtrl: AlertController,
  ) { }

  ngOnInit(): void {
    this.logic.fetchCurrentUser()
      .pipe(map((data) => this.currentUserId = data.sub))
      .pipe(concatMap(() => this.logic.fetchRoomList(this.currentUserId)))
      .pipe(concatMap((data) => this.logic.setExitsRoomAndUser(data)))
      .subscribe((data: Array<ResponseListRoomGroupsQueryItems>) => {
        this.roomGroupsItems = data;
      })
  }

  /**
   * Roomを作成するモーダルを表示させます
   * @returns Roomを増やすためのモーダルを表示させます
   */
  async presentAddRoomItem(): Promise<void> {
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

  /**
   * タスク追加画面に遷移させます
   * @param room 部屋の情報
   */
  navigateToTask(room: Room): void {
    this.router.navigate(['task', `${room.id}`], { queryParams: { status: 'active' } });
  }

  /**
   * Roomを削除します
   * @param roomId RoomのID
   * @param slideItem SlideItem情報を取得します
   */
  deleteRoom(roomId: string, slideItem: IonItemSliding): void {
    this.logic.fetchRoomMembers(roomId, this.currentUserId)
      .pipe(switchMap((data) => data.length === 0 ?
        this.logic.deleteRoomItem(roomId) : this.logic.removeMeFromRoom(roomId, this.currentUserId))
      )
      .pipe(concatMap(() => this.logic.fetchRoomList(this.currentUserId)))
      .pipe(concatMap((data) => this.logic.setExitsRoomAndUser(data)))
      .subscribe((result) => {
        this.roomGroupsItems = result;
        slideItem.close();
      });
  }

  /**
   * ルームを削除するときの確認モーダルを表示させます
   * @param item RoomGroupの情報
   * @param slideItem SlideItemの情報
   */
  async presentDeleteAlert(item: RoomGroup, slideItem: IonItemSliding): Promise<void> {
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

}
