import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, AlertController, ToastController } from '@ionic/angular';
import { from } from 'rxjs';
import { concatMap, map, tap } from 'rxjs/operators';
import { OwnTaskLogic } from './logic/own-task.logic';

@Component({
  selector: 'app-own-task',
  templateUrl: './own-task.page.html',
  styleUrls: ['./own-task.page.scss'],
})
export class OwnTaskPage implements OnInit, AfterViewInit {
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

  ngAfterViewInit() {
    this.logic.fetchCurrentUser()
      .pipe(map(result => this.currentUserId = result.sub))
      .pipe(concatMap((currentUserId) => this.logic.getTaskChargeItems(currentUserId)))
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
      message: `${alertBody.title}を完了します。`,
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
              .pipe(concatMap(() => this.logic.getTaskChargeItems(this.currentUserId)))
              .pipe(tap(() => presentToast))
              .subscribe((data) => { this.ownTaskItems = data; })
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
