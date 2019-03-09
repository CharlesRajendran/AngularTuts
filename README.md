- ### Input Properties
   - Input properties are ways we can give information to a custom components from out side.

   - We give input data as property binding.
#### App Component
~~~
<print-name [yourname]="'Charles'" [yourAge]="26"></print-name>
~~~
#### Print Name Component
##### HTML
~~~
<h1>Your name is : {{ yourName }} and you are {{ yourAge }} old.</h1>
~~~
 - We can get the input data in two ways.
1. Using Input Directive from `angular/core`
   - Advantage of using this is, we can give alias to the component.
##### TS
~~~
@Input('yourname') yourName = '';
~~~

2. Using the component decorator
~~~
@Component({
  ...
  inputs: ['yourAge'],
})
~~~
<br>
<hr>

- ### Output Properties
#### App Component
##### HTML
~~~
<print-name ... (alert)="alertName($event)"></print-name>
~~~

#### Print Name Component
##### HTML
~~~
<h1 (click)="eventEmit($event)"> Your name is : {{ yourName }} and you are {{ yourAge }} old.</h1>
~~~

##### TS
~~~
@Output('alert') alertEvent = new EventEmitter();
...
eventEmit(e) {
    this.alertEvent.emit(e.target);
}
~~~
Explanatin: When clicking on the component, it will emit the alert event, so we can capture that event.

- Best practices when working with event data 
  - it is always better if we pass the relevant information in the event argument and for that, good practice is to have an interface for the event arguments to use.

~~~
export interface AlertEventArgs {
  event: string;
  target: HTMLHeadingElement;
  data: string;
}
~~~

~~~
alertName(e: AlertEventArgs) {
    alert(`Message : ${e.data}`);
}
~~~

<br>
<hr>

- ### Template and Template URL
  - Template and TemplateUrl are other properties of component decorator. 
  - Template is useful when we have small amount of html, like 5 or 10 lines.
  - When we use both template and templateUrl, then whatever comes last will get the priority. example in the below case, templateUrl will get the preference.

~~~
@Component({
  selector: 'app-root',
  template: `
    <h1>This is a overriden text</h1>
  `,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
~~~
<br>
<hr>

- ### Styles and StyleUrl
    - Like in template, we have two ways to give styles aswell.
    - Those are styles and styleUrl, like in template, styles also give preference to which ever comes last.
~~~
@Component({
  ...,
  styles: [`
    h1 {
      color: red;
    }
  `],
  styleUrls: ['./app.component.scss'],
})
~~~
<br>
<hr>

- ### ViewEncapsulation
    - Another option available in the component API
    - We can control the styles and html to render in the shadow dom
        ~~~
        @Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.scss'],
            encapsulation: ViewEncapsulation.Native
            })
        ~~~
    - There are four options available
        - Emulated 
            - Angular's own emulated shadow dom solution
            - This is the default, the reason for this is, `shadow dom` is supported by every browser.
            - This is a angular specific shadow dom, this will add a attribute to the element, and use that to style
            ![Emulated Shadow Dom]()

        - Native
            - Javascript native shadow dom.
        - ShadowDom
        - None

- ### NgContainer, NgContent
    - Let's say you want to add custom content/html inside a created component, then you have to use `ng-content`
    - In the below code, I have given custom elements to head for the heading section
    - #### Print Name Component
    ~~~
    <div>
        <ng-content select=".heading"></ng-content>
        <p (click)="eventEmit($event)"> Your name is : {{ yourName }} and you are {{ yourAge }} old.</p>
    </div>
    ~~~
    - #### App Component
    ~~~
    <print-name [yourname]="'Charles'" [yourAge]="26" (alert)="alertName($event)">
    <h1 class="heading">This is the heading...</h1>
    </print-name>
    ~~~
    
    - Ng Container
      - In the above scenraio, for heading the h1 element will replace the ng-content, let's say you have to only give the text not h1 element, then you have to use ng-container instead of h1
        ~~~
        <print-name [yourname]="'Charles'" [yourAge]="26" (alert)="alertName($event)">
        <ng-container class="heading">This is the heading...</ng-container>
        </print-name>
        ~~~