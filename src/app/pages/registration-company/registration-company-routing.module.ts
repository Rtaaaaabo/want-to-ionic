import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrationCompanyPage } from './registration-company.page';

const routes: Routes = [
  {
    path: '',
    component: RegistrationCompanyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRegistrationCompanyPageRoutingModule { }
