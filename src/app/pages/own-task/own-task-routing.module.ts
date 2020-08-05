import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OwnTaskPage } from './own-task.page';

const routes: Routes = [
  {
    path: '',
    component: OwnTaskPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OwnTaskPageRoutingModule {}
