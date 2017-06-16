import {Component, Output, Input, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-comp3',

  template: `
    {{monAdresse.street}}
  `
})
export class Comp3Component  {

  counterValue: number = 0;
  @Output() superCounterChange = new EventEmitter();
  @Input() monAdresse: any;

  incrementSC() {
    this.counterValue++;
    this.superCounterChange.emit({
      value: this.counterValue
    });
  }
  decrementSC() {
    this.counterValue--;
    this.superCounterChange.emit({
      value: this.counterValue
    });
  }

}