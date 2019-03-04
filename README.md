# Angular
![Angular Cover Image](https://github.com/CharlesRajendran/AngularTuts/blob/master/img/cover.png)
Angular is the one of most popular javascript framework after react and vue, it was build and maintained by people at Google.

### Contents

- ##### property binding
~~~
// HTML
<img [src]="imageUrl" />

// TS
imageUrl = "someurl"
~~~

- ##### class binding
~~~
// HTML
<div [class.yellowBox]="showClass">
  Yellow Box
</div>

// TS
showClass = true;
~~~
Another variation of the class binding, specially, when you have multiple classes
~~~
<div [ngClass]="{'yellowBox': showClass, 'marpad-10': showClass}">
  Yellow Box
</div>
~~~

- ##### style binding
~~~
// HTML
<p [ngStyle]="{'background-color': bgcolor, 'margin.px': marginSize}">
  Let's make this font bolder
</p>

// TS
bgcolor = 'red';
marginSize = 100;
~~~

- ##### event binding
~~~
// HTML
<button (click)="callFunction($event)">
  Click
</button>

// TS
callFunction(e) {
    console.log(e.target);
}
~~~

- ##### event filtering
~~~
// HTML
<input (keyup.enter)="callFunction($event)" />
~~~

- ##### event bubling - $event.stopPropagation()
  - By default a event in an element will propagate to each element that covers it, let say you have a button that has a div as it's parent, and that also has the same event, then both methods will be called.
~~~
// HTML
<div (click)="divCalled()">
  <button (click)="callFunction($event)">
    Click Again
  </button>  
</div>

// Console Output
<button _ngcontent-c0=""> Click Again </button>
A div has been called
~~~

- ##### two way data binding [(ngModel)]
~~~
// App Module - you need FormModule to use ngModel
import { FormsModule } from '@angular/forms';
...
...
imports: [
    ...
    ...
    FormsModule
],

// HTML
<input [(ngModel)]="twoWay" />
<h1>two way: {{twoWay}}</h1>

// TS
let twoWay:string;
~~~
