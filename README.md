- ##### pipes
~~~
<p>{{ name | uppercase }}</p>
<p>{{ name | lowercase }}</p>
<p>{{ num | number:'1.1-2' }}</p>
<p>{{ price | currency:'LKR' }}</p>
<p>{{ price | percent }}</p>
<p>{{ today | date:shortDate}}</p>
~~~

- ##### custom pipes
~~~
// Generating Pipes with CLI
ng g pipe RmSpace
CREATE src/app/rm-space.pipe.spec.ts (192 bytes)
CREATE src/app/rm-space.pipe.ts (203 bytes)
UPDATE src/app/app.module.ts (520 bytes)
~~~

~~~
// App Module Update
import { RmSpacePipe } from './rm-space.pipe';
...
...
declarations: [
    ...
    ...
    RmSpacePipe
],
~~~

PipeTransform is an interface, where we need to implement the transform method
~~~
// Pipe File - remove space

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rmspace'
})
export class RmSpacePipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return value.split(' ').join('');
  }
}
~~~

~~~
// HTML
<p>{{ 'My Custom Pipe What Man' | rmspace }}</p>
~~~