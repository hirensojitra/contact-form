import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { CommuterComponent } from './commuter/commuter.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'commuter', pathMatch: 'full'
  },
  {
    path: 'auth', component: AuthComponent, children: [
      { path: '', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) }
    ]
  },
  {
    path: 'commuter', component: CommuterComponent, children: [
      { path: '', loadChildren: () => import('./commuter/commuter.module').then(m => m.CommuterModule) }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
