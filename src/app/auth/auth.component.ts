import { Component, OnInit } from '@angular/core';
import { pageAnimation } from '../app.animation';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  animations: [pageAnimation],
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  constructor() { }
  getState(outlet: any) {
    return outlet.activatedRouteData.state;
  }
  ngOnInit(): void {
  }
}
