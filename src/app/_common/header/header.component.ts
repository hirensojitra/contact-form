import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public isLoggedIn: boolean = false;
  
  user: any = localStorage.getItem("user")
  constructor(public authService: AuthService) {
    this.authService.afAuth.onAuthStateChanged((user) => {
      if (user) {
        this.isLoggedIn = true;
      } else {
        // not logged in
        this.isLoggedIn = false;
      } 
    });
  }
  ngOnInit(): void {
    
  }

}
