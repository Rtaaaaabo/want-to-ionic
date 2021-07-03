import { Component, OnInit } from '@angular/core';
import { Location, LocationStrategy } from '@angular/common';
import { Router, ActivatedRoute, RoutesRecognized } from '@angular/router';
import { ItemReorderEventDetail } from '@ionic/core';
import { ModalController, ToastController, AlertController } from '@ionic/angular';
import { forkJoin, from, of } from 'rxjs';
import { flatMap, switchMap, tap, map, concatMap, filter, pairwise } from 'rxjs/operators';
import { GetRoomQuery, GetUserQuery } from 'src/app/shared/service/amplify.service';
import { TaskLogic } from './logic/task.logic';
import { CompanyMembersInfo } from './interface/current-user-info.interface';
import { AddTaskModalComponent } from '../../shared/component/modal/add-task-modal/add-task-modal.component';
import { InterfaceTask } from 'src/app/interfaces/task.interface';
import { TaskFormModel } from 'src/app/shared/model/task-form.model';
import { CompanyMembers } from './model/task-member.model';

@Component({
  selector: 'app-task',
  templateUrl: './task.page.html',
  styleUrls: ['./task.page.scss'],
})
export class TaskPage implements OnInit {
  room = {} as GetRoomQuery;
  roomId: string;
  currentUserId: string;
  currentUserEmail: string;
  isReorder: boolean;
  segment: string;
  companyId: number | string;
  companyMembers: Array<CompanyMembersInfo>;
  roomMembers: Array<CompanyMembers>;
  user: GetUserQuery;
  taskFormData: TaskFormModel;
  taskActiveItems: Array<InterfaceTask>;
  taskDoneItems: Array<InterfaceTask>;
  private previousUrl: string = undefined;
  private previousParam: string = undefined;


  constructor(
    private readonly locationStrate: LocationStrategy,
    private readonly router: Router,
    private readonly location: Location,
    private readonly alertCtrl: AlertController,
    private readonly toastCtrl: ToastController,
    private readonly modalCtrl: ModalController,
    private readonly route: ActivatedRoute,
    private readonly logic: TaskLogic,
  ) {
    this.router.events
      .pipe(filter((e: any) => e instanceof RoutesRecognized),
        pairwise()
      ).subscribe((e: any) => {
        this.previousUrl = e[0].urlAfterRedirects;
        if (this.previousUrl.includes('?')) {
          this.previousParam = this.previousUrl.split('?')[1];
        } else {
          this.previousParam = undefined;
        }
      });
    this.locationStrate.onPopState(() => {
      // システムの戻るボタンクリック時の挙動
    })
  }

  ngOnInit() {
    this.route.queryParams.subscribe((param) => this.segment = param.status);
  }

  // 前のURLだけを取得
  public getPreviousParam() {
    return this.previousParam;
  }

  ionViewWillEnter(): void {
    this.isReorder = false;
    this.roomId = this.route.snapshot.paramMap.get('id');
    this.companyId = this.roomId.split(/(.*)_room/)[1];
    forkJoin({
      companyUser: this.logic.fetchCompanyMembers(this.companyId),
      activeTaskItems: this.logic.fetchActiveTaskPerRoom(this.roomId),
      doneTaskItems: this.logic.fetchDoneTaskPerRoom(this.roomId),
      room: this.logic.fetchRoomInfo(this.roomId),
      roomMembers: this.logic.fetchMemberListOnRoom(this.roomId).pipe(map(({ items }) => items)),
    }).subscribe((data) => {
      this.companyMembers = data.companyUser.companyMembers.items;
      this.taskActiveItems = data.activeTaskItems.sort(this.logic.compareTaskArray);
      this.taskDoneItems = data.doneTaskItems;
      this.room = data.room;
      this.roomMembers = data.roomMembers;
    });
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
        userId: this.currentUserId,
        roomMembers: this.roomMembers
      },
    });
    const dismissObservable = from(modal.onDidDismiss());
    dismissObservable
      .pipe(filter(({ data }) => data !== undefined))
      .pipe(map(({ data }) => this.taskFormData = data.taskValue))
      .pipe(switchMap(() => this.taskActiveItems.length !== 0 ?
        this.logic.updateStatusTaskItems(this.taskActiveItems) : of(this.taskActiveItems)
      ))
      .pipe(concatMap(() => this.logic.createTaskToRoom(this.taskFormData, this.roomId, this.currentUserId)))
      .pipe(concatMap(() => this.logic.fetchActiveTaskPerRoom(this.roomId)))
      .subscribe((items) => {
        console.log(items);
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
    this.router.navigate(['task-detail', `${task.id}`, `${segment}`])
  }

  async addCommentToTaskDetail(task): Promise<void> {
    await this.router.navigate(['task-detail', `${task.id}`, 'active'], {
      fragment: 'comment'
    });
  }

  segmentChanged(ev: CustomEvent): void {
    this.segment = ev.detail.value;
    this.location.replaceState(`task/${this.roomId}`, `status=${this.segment}`);
    this.logic.fetchDoneTaskPerRoom(this.roomId).subscribe((data) => {
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
              .pipe(flatMap(() => this.logic.fetchActiveTaskPerRoom(this.roomId)))
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

}
