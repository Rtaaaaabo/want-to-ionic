import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainRegistrationCompanyPage } from './main-registration-company.page';

const routes: Routes = [
  {
    path: '',
    component: MainRegistrationCompanyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRegistrationCompanyPageRoutingModule {}
