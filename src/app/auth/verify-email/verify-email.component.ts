import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.scss']
})
export class VerifyEmailComponent implements OnInit, AfterViewInit {
  constructor(
    public authService: AuthService,
    public router: Router
  ) {
  }
  ngOnInit() {
    
  }
  ngAfterViewInit(): void {
    if (this.authService.isLoggedIn) {
      this.router.navigate(['commuter/dashboard']);
    } else {
      // No user is signed in.
    }
  }
}
