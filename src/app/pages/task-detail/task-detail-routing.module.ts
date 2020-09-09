import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TaskDetailPage } from './task-detail.page';

const routes: Routes = [
  {
    path: ':id',
    component: TaskDetailPage
  },
  {
    path: '',
    redirectTo: ':id',
    pathMatch: 'full'
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TaskDetailPageRoutingModule { }
