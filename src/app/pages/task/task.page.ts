import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { ItemReorderEventDetail } from '@ionic/core';
import { ModalController, ToastController, ActionSheetController } from '@ionic/angular';
import { forkJoin, from, of } from 'rxjs';
import { flatMap, switchMap, tap, map, concatMap } from 'rxjs/operators';
import { GetRoomQuery, GetUserQuery, ListUsersQuery } from 'src/app/shared/service/amplify.service';
import { TaskLogic } from './logic/task.logic';
import { CurrentUserInfo } from './interface/current-user-info.interface';
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
  companyMembers: ListUsersQuery;
  roomMembers: Array<CompanyMembers>;
  user: GetUserQuery;
  taskFormData: TaskFormModel;
  taskActiveItems: Array<InterfaceTask>;
  taskDoneItems: Array<InterfaceTask>;

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
    forkJoin({
      companyUser: this.logic.fetchCurrentUserInfo()
        .pipe(map((res: CurrentUserInfo) => {
          this.currentUserEmail = res.email;
          this.currentUserId = res.sub;
        }))
        .pipe(concatMap(() => this.logic.fetchUserInfoFromAmplify(this.currentUserId)))
        .pipe(map((user) => this.user = user))
        .pipe(map((user) => this.companyId = user.companyID))
        .pipe(concatMap(() => this.logic.fetchCompanyMember(this.user.companyID))),

      activeTaskItems: this.logic.fetchActiveTaskPerRoom(this.roomId),
      doneTaskItems: this.logic.fetchDoneTaskPerRoom(this.roomId),
      room: this.logic.fetchRoomInfo(this.roomId),
      roomMembers: this.logic.fetchMemberListOnRoom(this.roomId).pipe(map(({ items }) => items)),
    }).subscribe((data) => {
      this.companyMembers = data.companyUser.items;
      this.taskActiveItems = data.activeTaskItems.sort(this.logic.compareTaskArray);
      this.taskDoneItems = data.doneTaskItems;
      this.room = data.room;
      this.roomMembers = data.roomMembers;
      console.log('taskActiveItems', this.taskActiveItems);
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
      .pipe(map(({ data }) => this.taskFormData = data))
      .pipe(switchMap(() => this.taskActiveItems.length !== 0 ?
        this.logic.updateStatusTaskItems(this.taskActiveItems) : of(this.taskActiveItems)
      ))
      .pipe(concatMap(() => this.logic.createTaskToRoom(this.taskFormData, this.roomId, this.currentUserId)))
      .pipe(concatMap(() => this.logic.fetchActiveTaskPerRoom(this.roomId)))
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
      .subscribe();
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
    this.logic.fetchDoneTaskPerRoom(this.roomId).subscribe((data) => {
      this.taskDoneItems = data;
    })
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
      .pipe(concatMap(() => this.logic.fetchActiveTaskPerRoom(this.roomId)))
      .subscribe((result) => {
        this.taskActiveItems = result
      });
  }

  navigateToRoomMember(): void {
    this.router.navigate(['room-members', `${this.roomId}`, `${this.companyId}`]);
  }

}
