import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, AlertController, ToastController } from '@ionic/angular';
import { from } from 'rxjs';
import { concatMap, map, tap } from 'rxjs/operators';
import { OwnTaskLogic } from './logic/own-task.logic';
import { Attribute, CurrentUser } from './model/own-task.interface';

@Component({
  selector: 'app-own-task',
  templateUrl: './own-task.page.html',
  styleUrls: ['./own-task.page.scss'],
})
export class OwnTaskPage implements OnInit {
  currentUserAttribute: Attribute;
  currentUser: CurrentUser;
  ownTaskItems: Array<any>;
  currentUserId: string;

  constructor(
    private router: Router,
    private loadingCtrl: LoadingController,
    private logic: OwnTaskLogic,
    private alertCtrl: AlertController,
    private readonly toastCtrl: ToastController,
  ) { }

  ngOnInit() { }

  ionViewWillEnter() {
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

  navigateToTaskDetail(item) {
    this.router.navigate(['task-detail', `${item.task.id}`, `active`]);
  }

  async presentDoneTaskAlert(alertBody): Promise<void> {
    const alert = await this.alertCtrl.create({
      header: '完了にしますか？',
      message: `${alertBody.task.title}を完了します。`,
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
              .pipe(tap(() => presentToast))
              .pipe(concatMap(() => this.logic.getTaskChargeItems(this.currentUserId)))
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

  async presentDoneToast(): Promise<void> {
    const toast = await this.toastCtrl.create({
      message: 'おつかれさまでした',
      duration: 5000,
    });
    toast.present();
  }


}
