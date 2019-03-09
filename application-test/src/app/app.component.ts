import { Component, ViewEncapsulation } from '@angular/core';
import { AlertEventArgs } from './print-name/print-name.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})

export class AppComponent {
  alertName(e: AlertEventArgs) {
    alert(`Message : ${e.data}`);
  }
}
