import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', loadChildren: () => import('./pages/login/login.routing.module').then(m => m.LoginRoutingModule) },
  { path: 'register', loadChildren: () => import('./pages/register/register.routing.module').then(m => m.RegisterRoutingModule) },
  { path: 'find-email', loadChildren: () => import('./pages/find/email/find-email.routing.module').then(m => m.FindEmailRoutingModule) },
  { path: 'reset-password', loadChildren: () => import('./pages/find/password/reset-password.routing.module').then(m => m.ResetPasswordRoutingModule) },
  { path: 'calendar', loadChildren: () => import('./pages/calendar/calendar.routing.module').then(m => m.CalendarRoutingModule) },
  { path: 'diary', loadChildren: () => import('./pages/diary/diary.routing.module').then(m => m.DiaryRoutingModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
