import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rmspace'
})
export class RmSpacePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value.split(' ').join('');
  }

}
