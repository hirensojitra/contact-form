import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from "../../shared/services/auth.service";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(
    public authService: AuthService,
    public router: Router
  ) { }
  ngOnInit() {
    if (this.authService.isLoggedIn) {
      this.router.navigate(['commuter/dashboard']);
    } else {
      // No user is signed in.
    }
  }
}
