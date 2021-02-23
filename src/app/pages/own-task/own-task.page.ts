import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { concatMap, map } from 'rxjs/operators';
import { OwnTaskLogic } from './logic/own-task.logic';

@Component({
  selector: 'app-own-task',
  templateUrl: './own-task.page.html',
  styleUrls: ['./own-task.page.scss'],
})
export class OwnTaskPage implements OnInit, AfterViewInit {
  ownTaskItems: Array<any>;

  constructor(
    private router: Router,
    private loadingCtrl: LoadingController,
    private logic: OwnTaskLogic,
  ) { }

  ngOnInit() { }

  ngAfterViewInit() {
    this.logic.fetchCurrentUser()
      .pipe(map(result => result.sub))
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

}
