import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-profile-setting',
  templateUrl: './profile-setting.component.html',
  styleUrls: ['./profile-setting.component.scss']
})
export class ProfileSettingComponent implements OnInit, AfterViewInit {

  constructor(public authService: AuthService) {

  }
  ngOnInit(): void {

  }
  ngAfterViewInit(): void {

  }
}
