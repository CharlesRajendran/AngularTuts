import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DomEventsPlugin } from '@angular/platform-browser/src/dom/events/dom_events';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'print-name',
  templateUrl: './print-name.component.html',
  styleUrls: ['./print-name.component.scss'],
  inputs: ['yourAge'],
})
export class PrintNameComponent {
  @Input('yourname') yourName = '';
  @Output('alert') alertEvent = new EventEmitter();

  eventEmit(e) {
    const eventData:AlertEventArgs = {
      event: 'alert',
      target: e.target,
      data: e.target.innerHTML
    };

    this.alertEvent.emit(eventData);
  }
}


export interface AlertEventArgs {
  event: string;
  target: HTMLHeadingElement;
  data: string;
}