import { Component, OnInit, ViewChild } from '@angular/core';
import { Location, ViewportScroller } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ModalController, ActionSheetController, ToastController } from '@ionic/angular';
import { from } from 'rxjs';

import { TaskDetailLogicService } from './logic/task-detail-logic.service';
import { AddTaskModalComponent } from 'src/app/shared/component/modal/add-task-modal/add-task-modal.component';
import { flatMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.page.html',
  styleUrls: ['./task-detail.page.scss'],
})
export class TaskDetailPage implements OnInit {
  taskId: string;
  taskDetail;
  link = "comment"
  testHref;
  fragmentComment = '';
  @ViewChild('comment') child: HTMLElement;

  constructor(
    private location: Location,
    private logic: TaskDetailLogicService,
    private route: ActivatedRoute,
    private scroll: ViewportScroller,
    private modalCtrl: ModalController,
    private actionSheetCtrl: ActionSheetController,
    private toastCtrl: ToastController,
  ) { }

  ngOnInit() {
    this.taskId = this.route.snapshot.paramMap.get('id');
    this.testHref = `task-detail/${this.taskId}#comment`;
    this.logic.fetchAnyTask(this.taskId).subscribe((data) => {
      this.taskDetail = data;
      console.log(this.taskDetail);
    });
  }

  async presentDoneToast(): Promise<void> {
    const toast = await this.toastCtrl.create({
      message: 'おつかれさまでした！',
      duration: 2000
    });
    toast.present();
  }

  ngAfterViewInit(): void {
    this.route.fragment.subscribe((result) => {
      this.scroll.scrollToAnchor(result);
    });
  }

  async presentModalEditTask(taskDetail) {
    const modal = await this.modalCtrl.create({
      component: AddTaskModalComponent,
      componentProps: { taskDetail: taskDetail },
    });
    return modal.present();
  }

  doneTask(taskDetail) {
    const presetnToast = from(this.presentDoneToast());
    this.logic.updateTaskItem(taskDetail, 10)
      .pipe(flatMap(() => this.logic.fetchAnyTask(taskDetail.id)))
      .pipe(tap(() => presetnToast)).subscribe((data) => this.taskDetail = data);
  }

  async presentActionSheet(taskDetail) {
    const actionSheet = await this.actionSheetCtrl.create({
      cssClass: 'my-custom-class',
      buttons: [{
        text: '完了',
        icon: 'checkbox',
        handler: () => {
          this.doneTask(taskDetail);
        }
      },
      {
        text: '編集',
        icon: 'create',
        handler: () => {
          this.presentModalEditTask(taskDetail)
        }
      },
      {
        text: '削除',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          this.deleteTask(taskDetail)
        }
      },
      {
        text: 'キャンセル',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('キャンセル');
        }
      }
      ]
    });
    await actionSheet.present();
  }

  deleteTask(taskDetail) {
    console.log('削除します。', taskDetail);
  }

  goBackToRoom() {
    this.location.back();
  }

}
