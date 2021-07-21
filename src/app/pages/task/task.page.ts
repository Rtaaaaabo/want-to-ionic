import { Component, OnInit } from '@angular/core';
import { Location, LocationStrategy } from '@angular/common';
import { Router, ActivatedRoute, RoutesRecognized, NavigationExtras } from '@angular/router';
import { ItemReorderEventDetail } from '@ionic/core';
import { ModalController, ToastController, AlertController, Platform } from '@ionic/angular';
import { forkJoin, from, of, Observable, Subscription } from 'rxjs';
import { tap, map, concatMap, filter, pairwise } from 'rxjs/operators';
import { GetRoomQuery, GetUserQuery } from 'src/app/shared/service/amplify.service';
import { TaskLogic } from './logic/task.logic';
import { CompanyMembersInfo } from './interface/current-user-info.interface';
import { AddTaskModalComponent } from '../../shared/component/modal/add-task-modal/add-task-modal.component';
import { InterfaceTask } from 'src/app/interfaces/task.interface';
import { TaskFormModel } from 'src/app/shared/model/task-form.model';
import { CompanyMembers, CurrentUser } from './model/task-member.model';

interface Attribute {
  name: string,
  email: string,
  email_verified: boolean,
  sub: string,
}

@Component({
  selector: 'app-task',
  templateUrl: './task.page.html',
  styleUrls: ['./task.page.scss'],
})
export class TaskPage implements OnInit {
  room = {} as GetRoomQuery;
  roomId: string;
  isReorder: boolean;
  segment: string;
  companyId: string;
  companyMembers: Array<CompanyMembersInfo>;
  roomMembers: Array<CompanyMembers>;
  user: GetUserQuery;
  taskFormData: TaskFormModel;
  taskActiveItems: Array<InterfaceTask>;
  taskDoneItems: Array<InterfaceTask>;
  private previousUrl: string = undefined;
  private previousParam: string = undefined;

  currentUserAttribute: Attribute;
  currentUser: CurrentUser;

  subscriptionCreateTask: Subscription;
  subscriptionUpdateTask: Subscription;
  subscriptionRoom: Subscription;

  constructor(
    private readonly locationStrate: LocationStrategy,
    private readonly router: Router,
    private readonly location: Location,
    private readonly alertCtrl: AlertController,
    private readonly toastCtrl: ToastController,
    private readonly modalCtrl: ModalController,
    private readonly route: ActivatedRoute,
    private readonly logic: TaskLogic,
    private readonly platform: Platform,
  ) {
    this.roomId = this.route.snapshot.paramMap.get('id');
    this.isReorder = false;
    this.initializeApp().subscribe(() => {
      this.subscriptionUpdateTask = this.logic.onUpdateTaskListener().subscribe({
        next: () => this.logic.fetchActiveTaskPerRoom(this.roomId)
          .pipe(concatMap((result) => this.logic.fetchEachStatusTask(result, 0)))
          .pipe(map((data) => this.taskActiveItems = data.sort(this.logic.compareTaskArray)))
          .pipe(concatMap(() => this.logic.fetchDoneTaskPerRoom(this.roomId).pipe(concatMap((result) => this.logic.fetchEachStatusTask(result, 10)))))
          .pipe(map((doneResult) => this.taskDoneItems = doneResult))
          .subscribe(() => console.log('TaskActiveItems', this.taskActiveItems)),
      });
      this.subscriptionRoom = this.logic.onUpdateRoomListener().subscribe({
        next: () => this.logic.fetchRoomInfo(this.roomId)
          .pipe(map((result) => this.room = result))
          .pipe(concatMap(() => this.logic.fetchMemberListOnRoom(this.roomId).pipe(map(({ items }) => items))))
          .pipe(map((result) => this.roomMembers = result))
          .subscribe(),
      });
      this.subscriptionCreateTask = this.logic.onCreateTaskListener().subscribe({
        next: () => this.logic.fetchActiveTaskPerRoom(this.roomId)
          .pipe(concatMap((result) => this.logic.fetchEachStatusTask(result, 0)))
          .subscribe((items) => {
            this.taskActiveItems = items.sort(this.logic.compareTaskArray);;
          }),
      })

    });
    this.segment = this.router.getCurrentNavigation().extras.state?.status;
    if (!this.segment) {
      this.segment = 'active';
    }

    this.locationStrate.onPopState(() => {
      // システムの戻るボタンクリック時の挙動
    })
  }

  initializeApp(): Observable<string> {
    return from(this.platform.ready());
  }

  ngOnInit(): void {
    this.isReorder = false;
    this.companyId = this.roomId.split(/(.*)_room/)[1];
    this.logic.fetchCurrentUserCognitoInfo()
      .pipe(map((data) => this.currentUserAttribute = data))
      .pipe(concatMap(() => this.logic.fetchAnyUserInfoFromList(this.currentUserAttribute.email)))
      .pipe(map((items) => this.currentUser = items[0]))
      .pipe(concatMap(() => this.logic.fetchCompanyMembers(this.companyId)))
      .subscribe((data) => {
        this.companyMembers = data.companyMembers.items;
      });
    this.companyId = this.roomId.split(/(.*)_room/)[1];
    forkJoin({
      companyUser: this.logic.fetchCompanyMembers(this.companyId),
      activeTaskItems: this.logic.fetchActiveTaskPerRoom(this.roomId).pipe(concatMap((result) => this.logic.fetchEachStatusTask(result, 0))),
      doneTaskItems: this.logic.fetchDoneTaskPerRoom(this.roomId).pipe(concatMap((result) => this.logic.fetchEachStatusTask(result, 10))),
      room: this.logic.fetchRoomInfo(this.roomId),
      roomMembers: this.logic.fetchMemberListOnRoom(this.roomId).pipe(map(({ items }) => items)),
    }).subscribe(({ companyUser, activeTaskItems, doneTaskItems, room, roomMembers }) => {
      this.companyMembers = companyUser.companyMembers.items;
      this.taskActiveItems = activeTaskItems.sort(this.logic.compareTaskArray);
      this.taskDoneItems = doneTaskItems;
      this.room = room;
      this.roomMembers = roomMembers;
    });
  }

  // 前のURLだけを取得
  public getPreviousParam() {
    return this.previousParam;
  }


  async presentDoneToast(): Promise<void> {
    const toast = await this.toastCtrl.create({
      message: 'おつかれさまでした！',
      duration: 2000
    });
    toast.present();
  }

  async presentAddTask(): Promise<void> {
    const modal = await this.modalCtrl.create({
      component: AddTaskModalComponent,
      componentProps: {
        room: this.room,
        userId: this.currentUser.id,
        roomMembers: this.roomMembers
      },
    });
    const dismissObservable = from(modal.onDidDismiss());
    dismissObservable
      .pipe(filter(({ data }) => data !== undefined))
      .pipe(map(({ data }) => this.taskFormData = data.taskValue))
      .pipe(concatMap(() => this.taskActiveItems.length !== 0 ?
        this.logic.updateStatusTaskItems(this.taskActiveItems) : of(this.taskActiveItems)
      ))
      .pipe(concatMap(() => this.logic.createTaskToRoom(this.taskFormData, this.roomId, this.currentUser.id)))
      .pipe(concatMap(() => this.logic.fetchActiveTaskPerRoom(this.roomId)))
      .pipe(concatMap((result) => this.logic.fetchEachStatusTask(result, 0)))
      .subscribe((items) => {
        this.taskActiveItems = items.sort(this.logic.compareTaskArray);;
      });
    return modal.present();
  }

  goBackToRoom(): void {
    this.location.back();
  }

  activeSortTaskItem(): void {
    this.isReorder = !this.isReorder;
  }

  get isCheckFabButton(): boolean {
    if (this.segment === 'active' && !this.isReorder) {
      return true;
    } else if (this.segment === 'active' && this.isReorder) {
      return false;
    } else {
      return false;
    }
  }

  reorderTask(ev: CustomEvent<ItemReorderEventDetail>): void {
    const itemMove = this.taskActiveItems.splice(ev.detail.from, 1)[0];
    this.taskActiveItems.splice(ev.detail.to, 0, itemMove);
    ev.detail.complete();
    from(this.taskActiveItems)
      .pipe(concatMap((taskActiveItem) => this.logic.getIndexNewArray(this.taskActiveItems, taskActiveItem)))
      .pipe(concatMap((indexArray: number) => this.logic.updateTaskItemPriority(indexArray, this.taskActiveItems)))
      .pipe(concatMap((data) => this.logic.reorderTaskMessage(data)))
      .subscribe();
  }

  navigateToTaskDetail(task, segment: string, isReorder: boolean): void {
    if (isReorder) return;
    let navigationExtras: NavigationExtras = {
      state: {
        segment: segment,
      }
    };
    this.router.navigate(['task-detail', `${task.id}`, `${segment}`], navigationExtras);
  }

  async addCommentToTaskDetail(task): Promise<void> {
    await this.router.navigate(['task-detail', `${task.id}`, 'active'], {
      fragment: 'comment'
    });
  }

  segmentChanged(ev: CustomEvent): void {
    this.segment = ev.detail.value;
    this.location.replaceState(`task/${this.roomId}`, `status=${this.segment}`);
    this.logic.fetchDoneTaskPerRoom(this.roomId)
      .pipe(concatMap((result) => this.logic.fetchEachStatusTask(result, 10)))
      .subscribe((data) => {
        this.taskDoneItems = data;
      });
  }

  async presentDoneTaskAlert(alertBody): Promise<void> {
    const alert = await this.alertCtrl.create({
      header: '完了にしますか？',
      message: `${alertBody.title}を完了にします。`,
      buttons: [
        {
          text: 'キャンセル',
          role: 'cancel',
        },
        {
          text: 'OK',
          role: 'ok',
          handler: () => {
            const presentToast = from(this.presentDoneToast());
            this.logic.updateDoneTaskItem(alertBody, 10)
              .pipe(concatMap(() => this.logic.fetchActiveTaskPerRoom(this.roomId)))
              .pipe(concatMap((result) => this.logic.fetchEachStatusTask(result, 0)))
              .pipe(tap(() => presentToast))
              .subscribe((data) => { this.taskActiveItems = data });
          }
        }
      ]
    });
    await alert.present();
  }

  navigateToRoomMember(): void {
    this.router.navigate(['room-members', `${this.roomId}`, `${this.companyId}`]);
  }

  ngOnDestroy(): void {
    this.subscriptionRoom.unsubscribe();
    this.subscriptionUpdateTask.unsubscribe();
  }
}
