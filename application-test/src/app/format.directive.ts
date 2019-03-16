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
