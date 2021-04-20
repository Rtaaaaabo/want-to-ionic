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
    loadChildren: () => import('./pages/menu/menu.module').then(m => m.MenuPageModule),
    canActivate: [AuthGuard],
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
    path: 'task',
    loadChildren: () => import('./pages/task/task.module').then((m) => m.TaskPageModule),
    canActivate: [AuthGuard],
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
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, routerOptions)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
