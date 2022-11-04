import { Component, OnInit } from '@angular/core';
import { pageAnimation, routerTransition } from '../app.animation';

@Component({
  selector: 'app-commuter',
  templateUrl: './commuter.component.html',
  animations: [pageAnimation],
  styleUrls: ['./commuter.component.scss']
})
export class CommuterComponent implements OnInit {
  constructor() { }
  getState(outlet: any) {
    return outlet.activatedRouteData.state;
  }
  ngOnInit(): void {
  }
}
