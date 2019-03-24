# Angular Forms
Angular handle the forms in two different way, 
1. Template Driven Forms
    - Angular provide some directives, which we use with input controls. This directives will internally create some objects of `FormControl` and `FormGroup` class to elements which will allow us to use some validations such as required, minlength, pattern and etc.
<br>
1. Reactive Forms
   - We code the forms by creating the object classes in the code, this is very useful, because we can have not only html 5 validations but also we can have custom validations. 


#### Create a basic form
~~~
  <form>
    <div class="form-group">
      <label for="email">Email: </label>
      <input class="form-control" name="email" id="email" />
    </div>
    <div class="form-group">
      <label for="password">Password: </label>
      <input class="form-control" type="password" name="password" id="password" autocomplete />
    </div>

    <button id="submit" class="btn btn-primary">Submit</button>
  </form>
~~~

### Template Driven Forms
- In Template Driven Forms we map the input field into Angular's FormControl Object, and when we use FormControl Object in a form that form will be an instance of FormGroup Class.
<br>
- These classes, have some attributes like, valid, invalid, dirty, pristien, error, value, ...., we can use these attributes for validations. 

#### NgModel
- `ngModel` is the directive used to convert a input element to FormControl object
- `ngModel` need `name` arribute of html to work
- to get the `FormControl` information, we will use the `template variable`.
~~~
<input ngModel name="email" #emailVar="ngModel" (change)="log(emailVar)" />
~~~

#### Template Driven Form Validations
- In template driven forms, we can have information such as whether the field is valid or invalide, dirty or pristine, touched or not and also informations such as value and  error.
- All these validations will work for html validations
- In the below example we have validations for `required` and `patter`, also we can have validations for `minLength`. 
- In the validation alert it will only display when we `focus` and the field is `not valid`
- Then we have divs to handle unique errors, with the help of `errors` field in the `FormControl` class.
~~~
<input
    ngModel name="email"
    #emailVar="ngModel"
    required pattern="(.)+com$" />

<div class="alert alert-danger" *ngIf="emailVar.touched && emailVar.invalid">
    <div *ngIf="emailVar.errors.required"> Need a value </div>
    <div *ngIf="emailVar.errors.pattern"> Not a valid email address </div>
</div>
~~~

#### Using css classes for validations.
- when we have the form validations, it will also add some css classes to the element, we can use this to add some custom styles
~~~
ng-dirty ng-touched ng-invalid
~~~
~~~
input.ng-dirty.ng-touched.ng-invalid {
  border: 2px solid red;
}
~~~

### NgForm [doc]](https://angular.io/api/forms/NgForm)
- When we have `FormControl` inputs, then the containing form will automatically be an `FormGroup` class object, unless we have `form:not([ngNoForm]):not([formGroup])` these directives.
- We can have the `FormGroup` information with `ngForm` like we used `ngModel`.

~~~
 <form #formVar="ngForm" (ngSubmit)="log(formVar)">
~~~

### NgModelGroup
- This is useful when we have to group some fields together, such as adderess information
~~~
<div ngModelGroup="address">
    <input ngModel name="street" />
    <input ngModel name="state" />
    <input ngModel name="country" />
</div>
~~~
- This address field will be a complex object
~~~
address: {
    country: "Sri Lanka"
    state: "western"
    street: "101/31, kelanitissagama, weragoda, wellampitiya"
}
~~~


