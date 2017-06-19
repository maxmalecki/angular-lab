import {Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-compteur',
  templateUrl: './compteur.component.html'
})
export class CompteurComponent  {

  counterValue: number = 0;
  @Output() counterChange = new EventEmitter();

  increment() {
    this.counterValue++;
    this.counterChange.emit({
      value: this.counterValue
    });
  }
  decrement() {
    this.counterValue--;
    this.counterChange.emit({
      value: this.counterValue
    });
  }

}