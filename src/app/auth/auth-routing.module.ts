import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LockScreenComponent } from './account/lock-screen/lock-screen.component';
import { LoginComponent } from './account/login/login.component';
import { LogoutComponent } from './account/logout/logout.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full'
  },
  {
    path: 'logout',
    component: LogoutComponent,
    pathMatch: 'full'
  },
  {
    path: 'lock-screen',
    component: LockScreenComponent,
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
