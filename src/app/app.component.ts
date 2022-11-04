import { Component } from '@angular/core';
import { pageAnimation, routerTransition } from './app.animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [ pageAnimation ],
})
export class AppComponent {
  title = 'contact';
  getState(outlet:any) {
    return outlet.activatedRouteData.state;
  }
}
