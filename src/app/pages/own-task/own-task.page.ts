import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, AlertController, ToastController, Platform } from '@ionic/angular';
import { from, Subscription, Observable } from 'rxjs';
import { concatMap, map, tap } from 'rxjs/operators';
import { OwnTaskLogic } from './logic/own-task.logic';
import { Attribute, CurrentUser } from './model/own-task.interface';
import { ChargeTaskItems } from 'src/app/shared/model/user.model';
import { TaskFormItem } from './model/own-task.interface';

@Component({
  selector: 'app-own-task',
  templateUrl: './own-task.page.html',
  styleUrls: ['./own-task.page.scss'],
})
export class OwnTaskPage implements OnInit {
  currentUser: CurrentUser;
  currentUserAttribute: Attribute;
  ownTaskItems: Array<TaskFormItem>;

  subscriptionCreateTaskGroup: Subscription;
  subscriptionUpdateTaskGroup: Subscription;
  subscriptionDeleteTaskGroup: Subscription;

  constructor(
    private logic: OwnTaskLogic,
    private readonly router: Router,
    private readonly loadingCtrl: LoadingController,
    private readonly alertCtrl: AlertController,
    private readonly toastCtrl: ToastController,
    private readonly platform: Platform,
  ) {
    this.initializeApp().subscribe(() => {
      // this.subscriptionCreateTaskGroup = 
      // this.logic.getTaskChargeItems(this.currentUser.id)
      // .pipe(concatMap(({ items }) => this.logic.setTaskPerRoom(items)))
      // .pipe(concatMap((items) => this.logic.filterExceptDoneTask(items)))
    })
  }

  initializeApp(): Observable<string> {
    return from(this.platform.ready());
  }

  ngOnInit() {
    this.logic.fetchCurrentUser()
      .pipe(map(result => this.currentUserAttribute = result))
      .pipe(concatMap(() => this.logic.fetchAnyUserInfoFromList(this.currentUserAttribute.email)))
      .pipe(map((items) => this.currentUser = items[0]))
      .pipe(concatMap(() => this.logic.getTaskChargeItems(this.currentUser.id)))
      .pipe(concatMap(({ items }) => this.logic.setTaskPerRoom(items)))
      .pipe(concatMap((items) => this.logic.filterExceptDoneTask(items)))
      .subscribe((items) => {
        this.ownTaskItems = items;
      })
  }

  /**
   * ローディングを表示する
   */
  async presentLoading() {
    const loading = await this.loadingCtrl.create({
      cssClass: 'custom-loading',
      message: '読込中...',
      translucent: true,
      backdropDismiss: true
    });
    await loading.present();
    await loading.onDidDismiss();
  }

  /**
   * タスクの詳細画面に遷移する
   * @param taskId タスクとルームの情報
   */
  navigateToTaskDetail(taskId: string): void {
    this.router.navigate(['task-detail', `${taskId}`, `active`]);
  }

  /**
   * 完了ボタンクリック時の確認アラート
   * @param alertBody タスクとルーム
   */
  async presentDoneTaskAlert(task: ChargeTaskItems): Promise<void> {
    const alert = await this.alertCtrl.create({
      header: '完了にしますか？',
      message: `${task.title}を完了します。`,
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
            this.logic.updateDoneTaskItem(task.id, 10)
              .pipe(tap(() => presentToast))
              .pipe(concatMap(() => this.logic.getTaskChargeItems(this.currentUser.id)))
              .pipe(concatMap(({ items }) => this.logic.setTaskPerRoom(items)))
              .pipe(concatMap((items) => this.logic.filterExceptDoneTask(items)))
              .subscribe((data) => {
                this.ownTaskItems = data;
              })
          }
        }
      ]
    });
    await alert.present();
  }

  /**
   * 完了ボタンクリック時
   */
  async presentDoneToast(): Promise<void> {
    const toast = await this.toastCtrl.create({
      message: 'おつかれさまでした',
      duration: 5000,
    });
    toast.present();
  }
}
