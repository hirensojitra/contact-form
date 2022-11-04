import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VerifyEmailRoutingModule } from './verify-email-routing.module';
import { RouterModule } from '@angular/router';
import { VerifyEmailComponent } from './verify-email.component';


@NgModule({
  declarations: [
    VerifyEmailComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    VerifyEmailRoutingModule
  ]
})
export class VerifyEmailModule { }
