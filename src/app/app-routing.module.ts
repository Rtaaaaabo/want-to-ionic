import { NgModule } from '@angular/core';
import { ExtraOptions, PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 64],
  relativeLinkResolution: 'legacy'
};

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'task',
    loadChildren: () => import('./pages/task/task.module').then((m) => m.TaskPageModule),
  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/signup/signup.module').then(m => m.SignupPageModule),
  },
  {
    path: 'confirm',
    loadChildren: () => import('./pages/confirm/confirm.module').then(m => m.ConfirmPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'task-detail',
    loadChildren: () => import('./pages/task-detail/task-detail.module').then(m => m.TaskDetailPageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'comment',
    loadChildren: () => import('./pages/comment/comment.module').then(m => m.CommentPageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'room-members',
    loadChildren: () => import('./pages/room-members/room-members.module').then(m => m.RoomMembersPageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'member-list',
    loadChildren: () => import('./pages/member-list/member-list.module').then(m => m.MemberListPageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'create-company',
    loadChildren: () => import('./pages/create-company/create-company.module').then(m => m.CreateCompanyPageModule)
  },
  {
    path: 'registration-company',
    loadChildren: () => import('./pages/registration-company/registration-company.module').then(m => m.RegistrationCompanyPageModule)
  },
  {
    path: 'complete-register',
    loadChildren: () => import('./pages/complete-register/complete-register.module').then(m => m.CompleteRegisterPageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, routerOptions)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
