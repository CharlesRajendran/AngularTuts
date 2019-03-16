import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showThis = false;
  hideThis = true;
  color = 'green';
  courses = ['Maths', 'Science', 'Commerce'];
  names = [
    {id: 1, value: 'Charles'},
    {id: 2, value: undefined}
  ];

  trackById(index, name) {
    return name ? name.id : undefined;
  }
}
