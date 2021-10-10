import { Component, OnInit, Input } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { ModalController, AlertController, IonItemSliding, Platform } from '@ionic/angular';
import { AddRoomModalComponent } from '../../../../shared/component/modal/add-room-modal/add-room-modal.component';
import { HomeLogic } from '../../logic/home.logic';
import { from, Subscription, Observable } from 'rxjs';
import { concatMap, filter } from 'rxjs/operators';
import { ResponseListRoomGroupsQueryItems } from '../../service/response/response.model';
import { Room, RoomGroup } from 'src/app/shared/service/amplify.service';
import { CurrentUser, Attribute, FetchTaskGroup } from '../../model/home.interface';

@Component({
  selector: 'app-list-room',
  templateUrl: './list-room.component.html',
  styleUrls: ['./list-room.component.scss'],
})
export class ListRoomComponent implements OnInit {
  @Input() roomGroupsItems: Array<ResponseListRoomGroupsQueryItems>;
  @Input() currentUserAttribute: Attribute;
  @Input() currentUser: CurrentUser;

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
      this.subscriptionCreateRoom = this.logic.onCreateRoomListener()
        .subscribe({
          next: () => this.fetchGroupItems(),
        });

      this.subscriptionUpdateRoom = this.logic.onUpdateRoomListener()
        .subscribe({
          next: () => this.fetchGroupItems(),
        });

      this.subscriptionDeleteRoom = this.logic.onDeleteRoomListener()
        .subscribe({
          next: () => this.fetchGroupItems(),
        });

      this.subscriptionCreateRoomGroup = this.logic.onCreateRoomGroupListener()
        .subscribe({
          next: () => this.fetchGroupItems(),
        });

      this.subscriptionUpdateRoomGroup = this.logic.onUpdateRoomGroupListener()
        .subscribe({
          next: () => this.fetchGroupItems(),
        });

      this.subscriptionDeleteRoomGroup = this.logic.onDeleteRoomGroupListener()
        .subscribe({
          next: () => this.fetchGroupItems(),
        });
    })
  }

  ngOnInit(): void { }

  fetchGroupItems(): void {
    this.logic.fetchRoomList(this.currentUser.id)
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
      });
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
            // this.verifyDeleteTask(slideItem, item);
            // this.presentStillExistsOwnTask()
          }
        }
      ]
    });
    alert.present();
  }

  async presentStillExistsOwnTask(item: RoomGroup, slideItem: IonItemSliding): Promise<void> {
    const alert = await this.alertCtrl.create({
      header: '担当タスクがまだ残っています',
      message: '担当タスクを他の方に変更するか、終わっていればステータスをDONEにしてください',
      buttons: [
        {
          text: 'OK',
          role: 'ok',
          handler: () => {
            slideItem.close();
          }
        },
      ]
    });
    alert.present();
  }

  /**
   * 削除対象のRoomの中に担当するタスクがあれば削除しないようにする
   * @param slideItem SlideItemの情報
   * @param item RoomGroupのItem
   */
  verifyDeleteTask(item: RoomGroup, slideItem: IonItemSliding): void {
    this.logic.fetchUserInfo(item.userID)
      .pipe(concatMap((data) => this.logic.verifyExistTaskOnRoom(data.chargeTask.items, item.roomID)))
      .subscribe((isExist) => {
        isExist ? this.presentStillExistsOwnTask(item, slideItem) : this.presentDeleteAlert(item, slideItem);
      })
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
