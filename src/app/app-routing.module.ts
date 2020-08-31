import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'setting',
    loadChildren: () => import('./pages/setting/setting.module').then(m => m.SettingPageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'own-task',
    loadChildren: () => import('./pages/own-task/own-task.module').then(m => m.OwnTaskPageModule),
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
    loadChildren: () => import('./pages/task/task.module').then(m => m.TaskPageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'task-detail',
    loadChildren: () => import('./pages/task-detail/task-detail.module').then( m => m.TaskDetailPageModule)
  },
  {
    path: 'comment',
    loadChildren: () => import('./pages/comment/comment.module').then( m => m.CommentPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
