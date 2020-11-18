import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { ItemReorderEventDetail } from '@ionic/core';
import { ModalController, ToastController, ActionSheetController, LoadingController } from '@ionic/angular';
import { from, of } from 'rxjs';
import { flatMap, switchMap, tap, map, catchError, concatMap, toArray, take } from 'rxjs/operators';
import { GetRoomQuery, ListUsersQuery } from 'src/app/shared/service/amplify.service';
import { AddTaskModalComponent } from '../../shared/component/modal/add-task-modal/add-task-modal.component';
import { TaskLogic } from './logic/task.logic';
import { CurrentUserInfo } from './interface/current-user-info.interface';
import { AddPersonModalComponent } from 'src/app/pages/task/component/add-person-modal/add-person-modal.component';
import { ListRoomGroupsQuery } from 'src/app/API.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.page.html',
  styleUrls: ['./task.page.scss'],
})
export class TaskPage implements OnInit {
  room = {} as GetRoomQuery;
  roomId: string;
  userId: string;
  userEmail: string;
  taskActiveItems;
  taskDoneItems;
  isReorder: boolean;
  segment: string;
  companyId: number | string;
  companyMembers: Array<ListUsersQuery>;
  roomMembers: Array<ListRoomGroupsQuery>;
  user;
  dismissData;

  constructor(
    private router: Router,
    private modalCtrl: ModalController,
    private route: ActivatedRoute,
    private location: Location,
    private logic: TaskLogic,
    private toastCtrl: ToastController,
    private actionSheetCtrl: ActionSheetController,
  ) { }

  ngOnInit(): void { }

  ionViewWillEnter(): void {
    this.isReorder = false;
    this.segment = 'active';
    this.roomId = this.route.snapshot.paramMap.get('id');
    this.logic.fetchRoomInfo(this.roomId)
      .subscribe((roomInfo: GetRoomQuery) => {
        this.room = roomInfo;
      });
    this.logic.fetchCurrentUserInfo()
      .pipe(map((res: CurrentUserInfo) => {
        this.userEmail = res.email;
        this.userId = res.sub;
      }))
      .pipe(flatMap(() => this.logic.fetchUserInfoFromAmplify(this.userId)))
      .pipe(map((user) => this.user = user))
      .pipe(map((user) => this.companyId = user.companyID))
      .pipe(flatMap(() => this.logic.fetchCompanyMember(this.user.companyID)))
      .subscribe(({ items }) => {
        this.companyMembers = items;
      });
    this.logic.fetchActiveTaskPerRoom(this.roomId)
      .subscribe((items) => {
        this.taskActiveItems = items.sort(this.logic.compareTaskArray);
        console.log(this.taskActiveItems);
      })
    this.logic.fetchDoneTaskPerRoom(this.roomId).subscribe((items) => {
      this.taskDoneItems = items;
    })
    this.logic.fetchMemberListOnRoom(this.roomId).subscribe(({ items }) => {
      this.roomMembers = items
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
        userId: this.userId,
        roomMembers: this.roomMembers
      },
    });
    const dismissObservable = from(modal.onDidDismiss());
    dismissObservable
      .pipe(map(({ data }) => this.dismissData = data))
      .pipe(switchMap(() => this.taskActiveItems.length !== 0 ? this.logic.updateStatusTaskItems(this.taskActiveItems) : of(this.taskActiveItems)))
      .pipe(concatMap(() => this.logic.createTaskToRoom(this.dismissData, this.roomId, this.userId)))
      .pipe(concatMap(() => this.logic.fetchActiveTaskPerRoom(this.roomId)))
      .subscribe((items) => {
        console.log(items);
        this.taskActiveItems = items.sort(this.logic.compareTaskArray);
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
    this.logic.reorderStatusTaskItems(ev.detail, this.taskActiveItems)
      .pipe(concatMap(() => this.logic.updateReorderTargetItems(ev.detail, this.taskActiveItems)))
      .pipe(take(1))
      .pipe(concatMap(() => this.logic.fetchActiveTaskPerRoom(this.roomId)))
      .subscribe((items) => {
        this.taskActiveItems = items;
        console.log('task active items', this.taskActiveItems);
      })
  }

  navigateToTaskDetail(task, segment): void {
    this.router.navigate(['task-detail', `${task.id}`, `${segment}`])
  }

  addCommentToTaskDetail(task): void {
    this.router.navigate(['task-detail', `${task.id}`], {
      fragment: 'comment'
    })
  }

  segmentChanged(ev): void {
    this.segment = ev.detail.value;
  }

  doneTask(taskFormItem): void {
    const presentToast = from(this.presentDoneToast());
    this.logic.updateDoneTaskItem(taskFormItem, 10)
      .pipe(flatMap(() => this.logic.fetchActiveTaskPerRoom(this.roomId)))
      .pipe(tap(() => presentToast))
      .subscribe((data) => { this.taskActiveItems = data });
  }

  async presentConfirmDelete(task): Promise<void> {
    const actionSheet = await this.actionSheetCtrl.create({
      buttons: [
        {
          text: '削除',
          role: 'destructive',
          handler: () => {
            this.deleteTask(task)
          }
        },
        {
          text: 'キャンセル',
          role: 'cancel',
        }
      ]
    })
    return actionSheet.present();
  }

  deleteTask(task): void {
    this.logic.deleteTaskItem(task.id)
      .pipe(flatMap(() => this.logic.fetchActiveTaskPerRoom(this.roomId)))
      .subscribe((result) => this.taskActiveItems = result);
  }

  async presentAddPersonToRoom(): Promise<void> {
    const modal = await this.modalCtrl.create({
      component: AddPersonModalComponent,
      componentProps: {
        members: this.companyMembers,
        users: this.user
      }
    })
    modal.onDidDismiss().then(({ data }) => {
      if (data === undefined) {
        return;
      };
      from(data)
        .pipe(flatMap((userId) => this.logic.createRoomGroup(userId, this.roomId)),
          catchError((error) => error))
        .pipe(flatMap(() => this.logic.fetchMemberListOnRoom(this.roomId)))
        .subscribe(({ items }) => {
          console.log(items);
        });
    });
    return modal.present()
  }

  navigateToRoomMember(): void {
    this.router.navigate(['room-members', `${this.roomId}`, `${this.companyId}`]);
  }

}
