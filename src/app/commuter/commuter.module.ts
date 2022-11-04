import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommuterRoutingModule } from './commuter-routing.module';
import { CommuterComponent } from './commuter.component';
import { ProfileSettingComponent } from './profile-setting/profile-setting.component';


@NgModule({
  declarations: [
    CommuterComponent,
    ProfileSettingComponent
  ],
  imports: [
    CommonModule,
    CommuterRoutingModule,
  ],
  exports: [
    CommuterComponent
  ]
})
export class CommuterModule { }
