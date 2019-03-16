# Angular

## Angular Directives
- ##### There are two type of directives
  - Structural Directive - directives will affect the dom and rerender the dom
  - Attribute Directive

### NgIf
##### HTML
~~~
<div *ngIf="showThis">
  Hi There
</div>
~~~

##### JS
~~~
export class AppComponent {
  showThis = true;
}
~~~

#### Note: NgIf with ng-template
##### HTML
~~~
<div *ngIf="showThis; then ifmsg else elsemsg">
  
</div>

<ng-template #ifmsg>
  If message
</ng-template>

<ng-template #elsemsg>
  Else message
</ng-template>
~~~

##### TS
~~~
export class AppComponent {
  showThis = false;
}
~~~

#### Note: Hidding property instead of *ngIf
- ngIf is structural directive, which means it will re render the dom when it detects changes, it is quite an expensive thing, hidden will control the hidden property of the element, so it will not rerender the dom, but it will not remove the unused code, which will result in making the file huge, so it will also expensive in large projects.
  - So ngIf for small projects
  - Hidden property in large projects

- ##### HTML
~~~
<div [hidden]="hideThis">
  Hidden Propery
</div>
~~~

- ##### TS
~~~
  hideThis = true;
~~~
<br>
<hr>

### NgSwitchCase
##### HTML
~~~
<div [ngSwitch]="color">
  <div *ngSwitchCase="'red'">RED</div>
  <div *ngSwitchCase="'green'">GREEN</div>
  <div *ngSwitchCase="'yellow'">YELLOW</div>
  <div *ngSwitchDefault>Not a traffic color...</div>
</div>
~~~

##### TS
~~~
export class AppComponent {
  color = 'green';
}

~~~
<br>
<hr>

### NgFor ([Documentation](https://angular.io/api/common/NgForOf))
##### HTML
~~~
<ul>
  <li *ngFor="let course of courses"> {{ course }}</li>
</ul>
~~~

##### TS
~~~
export class AppComponent {
  courses = ['Maths', 'Science', 'Commerce'];
}
~~~

#### ngFor exported values ([Exported Values](https://angular.io/api/common/NgForOf#local-variables))
~~~
*ngFor="let course of courses; index as i"
~~~

#### Improve performance of ngFor by trackBy
- when we update the ngFor array, then angular will rerender thanks to angular change detection, this is a performance issue, specially when we have lots of data
- Angular by default track by default with objects memory location, when we update the array it will change memory location, so it will re render.
- we can modify this behaviour and we can say angular to use something else to track this data.

##### HTML
~~~
<ul>
  <li *ngFor="let name of names; trackBy:trackById"> {{ name.value }}</li>
</ul>
~~~

##### TS
~~~
trackById(index, name) {
  return name ? name.id : undefined;
}
~~~

<br>
<hr>

### Safe Traversal Operator
- This is useful when we have attributes that can have null values, for example in scenarios where data is fetch from server, then it might have null value for some times, this will give an error in the application, in angular rendering a null value attribute will result in an error. `Safe Traversal Operator` is the solution for this.

##### HTML
~~~
<ul>
  <li ...> {{ name?.value }}</li>
</ul>
~~~
<br>
<hr>

## Custom Angular Directive

### Creating a directive with Angular Cli
~~~
>> ng g d format
CREATE src/app/format.directive.spec.ts (224 bytes)
CREATE src/app/format.directive.ts (141 bytes)
UPDATE src/app/app.module.ts (487 bytes)
~~~

##### HTML
~~~
<input [appFormat]="'lowercase'" />
~~~

##### TS
~~~
import { Directive, HostListener, ElementRef, Input } from '@angular/core';
import { format } from 'url';

@Directive({
  selector: '[appFormat]'
})
export class FormatDirective {
  // ElementRef will allow us to access element information in the DOM
  constructor(private el: ElementRef) { }

  // Input with same name allow us to give information to the element
  @Input('appFormat') appFormat;

  // HostListener will allow us to capture the elements (element that have the directive) events.
  @HostListener('blur') onblur() {
    // nativeElement will allow us to access the native HTML element's features
    const value = this.el.nativeElement.value;

    if (this.appFormat === 'uppercase') {
      this.el.nativeElement.value = value.toUpperCase();
    } else {
      this.el.nativeElement.value = value.toLowerCase();
    }
  }

}
~~~
<br>
<hr>
