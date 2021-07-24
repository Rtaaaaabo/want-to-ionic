import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { ModalController, AlertController, IonItemSliding, Platform } from '@ionic/angular';
import { AddRoomModalComponent } from '../../../../shared/component/modal/add-room-modal/add-room-modal.component';
import { HomeLogic } from '../../logic/home.logic';
import { from, Subscription, Observable } from 'rxjs';
import { concatMap, switchMap, map, filter } from 'rxjs/operators';
import { ResponseListRoomGroupsQueryItems } from '../../service/reponse/response.model';
import { Room, RoomGroup } from 'src/app/shared/service/amplify.service';
import { CurrentUser, Attribute } from '../../model/home.interface';

@Component({
  selector: 'app-list-room',
  templateUrl: './list-room.component.html',
  styleUrls: ['./list-room.component.scss'],
})
export class ListRoomComponent implements OnInit {
  roomGroupsItems: Array<ResponseListRoomGroupsQueryItems>;
  currentUserAttribute: Attribute;
  currentUser: CurrentUser;

  subscriptionCreateRoom: Subscription;
  subscriptionUpdateRoom: Subscription;
  subscriptionDeleteRoom: Subscription;
  subscriptionCreateRoomGroup: Subscription;
  subscriptionUpdateRoomGroup: Subscription;
  subscriptionDeleteRoomGroup: Subscription;

  constructor(
    private logic: HomeLogic,
    private readonly modalCtrl: ModalController,
    private readonly router: Router,
    private readonly alertCtrl: AlertController,
    private readonly platform: Platform,
  ) {
    this.initializeApp().subscribe(() => {
      this.subscriptionCreateRoom = this.logic.onCreateRoomListener().subscribe(() => {
        next: () => this.logic.fetchRoomList(this.currentUser.id)
          .pipe(concatMap((data) => this.logic.setExitsRoomAndUser(data)))
          .subscribe((data) => {
            this.roomGroupsItems = data;
          });
      });

      this.subscriptionUpdateRoom = this.logic.onUpdateRoomListener().subscribe(() => {
        next: () => this.logic.fetchRoomList(this.currentUser.id)
          .pipe(concatMap((data) => this.logic.setExitsRoomAndUser(data)))
          .subscribe((data) => {
            this.roomGroupsItems = data;
          })
      });

      this.subscriptionDeleteRoom = this.logic.onDeleteRoomListener().subscribe(() => {
        next: () => this.logic.fetchRoomList(this.currentUser.id)
          .pipe(concatMap((data) => this.logic.setExitsRoomAndUser(data)))
          .subscribe((data) => {
            this.roomGroupsItems = data;
          })
      });

      this.subscriptionCreateRoomGroup = this.logic.onCreateRoomGroupListener().subscribe(() => {
        next: () => this.logic.fetchRoomList(this.currentUser.id)
          .pipe(concatMap((data) => this.logic.setExitsRoomAndUser(data)))
          .subscribe((data) => {
            this.roomGroupsItems = data;
          })
      });

      this.subscriptionUpdateRoomGroup = this.logic.onUpdateRoomGroupListener().subscribe(() => {
        next: () => this.logic.fetchRoomList(this.currentUser.id)
          .pipe(concatMap((data) => this.logic.setExitsRoomAndUser(data)))
          .subscribe((data) => {
            this.roomGroupsItems = data;
          })
      })

      this.subscriptionDeleteRoomGroup = this.logic.onDeleteRoomGroupListener().subscribe(() => {
        next: () => this.logic.fetchRoomList(this.currentUser.id)
          .pipe(concatMap((data) => this.logic.setExitsRoomAndUser(data)))
          .subscribe((data) => {
            this.roomGroupsItems = data;
          })
      })
    })
  }

  ngOnInit(): void {
    this.logic.fetchCurrentUser()
      .pipe(map((data) => this.currentUserAttribute = data))
      .pipe(concatMap(() => this.logic.fetchAnyUserInfoFromList(this.currentUserAttribute.email)))
      .pipe(map((items) => this.currentUser = items[0]))
      .pipe(concatMap(() => this.logic.fetchRoomList(this.currentUser.id)))
      .pipe(concatMap((data) => this.logic.setExitsRoomAndUser(data)))
      .subscribe((data) => {
        this.roomGroupsItems = data;
      });
  }

  initializeApp(): Observable<string> {
    return from(this.platform.ready());
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
      .pipe(filter(({ data }) => data !== undefined))
      .pipe(concatMap(({ data }) => this.logic.createRoom(data, this.currentUser)))
      .pipe(concatMap((room) => this.logic.createUserRoomGroup(this.currentUser.id, room.id)))
      .pipe(concatMap(() => this.logic.fetchRoomList(this.currentUser.id)))
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
    const navigationExtras: NavigationExtras = {
      state: { status: 'active' }
    }
    this.router.navigate(['task', `${room.id}`], navigationExtras);
  }

  /**
   * Roomを削除します
   * @param roomId RoomのID
   * @param slideItem SlideItem情報を取得します
   */
  deleteRoom(roomId: string, slideItem: IonItemSliding): void {
    this.logic.fetchRoomMembers(roomId, this.currentUser.id)
      .pipe(concatMap((data) => data.length === 0 ?
        this.logic.deleteRoomItem(roomId) : this.logic.removeMeFromRoom(roomId, this.currentUser.id))
      )
      .pipe(concatMap(() => this.logic.fetchRoomList(this.currentUser.id)))
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

  ngOnDestroy(): void {
    this.subscriptionCreateRoom.unsubscribe();
    this.subscriptionUpdateRoom.unsubscribe();
    this.subscriptionDeleteRoom.unsubscribe();
    this.subscriptionCreateRoomGroup.unsubscribe();
    this.subscriptionUpdateRoomGroup.unsubscribe();
    this.subscriptionDeleteRoomGroup.unsubscribe();
  }

}
