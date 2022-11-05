import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommuterRoutingModule } from './commuter-routing.module';
import { CommuterComponent } from './commuter.component';
import { ProfileSettingModule } from './profile-setting/profile-setting.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { ProfileSettingRoutingModule } from './profile-setting/profile-setting-routing.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    CommuterComponent
  ],
  imports: [
    CommonModule,
    CommuterRoutingModule,
    RouterModule,
    ProfileSettingRoutingModule,
    DashboardModule,
    ProfileSettingModule
  ],
  exports: [
    CommuterComponent
  ]
})
export class CommuterModule { }
