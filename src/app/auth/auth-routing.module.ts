import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'login', pathMatch: 'full'
  },
  {
    path: 'login', component: LoginComponent, children: [
      { path: '', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) }
    ]
  },
  {
    path: 'register', component: RegisterComponent, children: [
      { path: '', loadChildren: () => import('./register/register.module').then(m => m.RegisterModule) }
    ]
  },
  {
    path: 'verify-email', component: VerifyEmailComponent, children: [
      { path: '', loadChildren: () => import('./verify-email/verify-email.module').then(m => m.VerifyEmailModule) }
    ]
  },
  {
    path: 'forgot-password', component: ForgotPasswordComponent, children: [
      { path: '', loadChildren: () => import('./forgot-password/forgot-password.module').then(m => m.ForgotPasswordModule) }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
