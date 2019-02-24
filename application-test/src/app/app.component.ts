import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  imageUrl = 'https://raw.githubusercontent.com/dart-lang/logos/master/logos_and_wordmarks/angulardart-logo.png';
  showClass = true;
  bgcolor = 'red';
  marginSize = 100;

  callFunction(e) {
    console.log(e.target);
  }

  divCalled() {
    console.log('A div has been called');
  }

  let twoWay:string;
}

