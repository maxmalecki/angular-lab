
import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html' 
})
export class AppComponent {

  person: string= 'John Doe';
  age: number= 30;
  address: any= {street: 'rue du Paradis', city: '75010 Paris'};
  alignement: string = 'left';
  couleur: string = 'red';
  counter: any = 'N/A';
  superCounter: number = 0

  modifierPersonne () {
    this.person = 'Another man';
  }

  myCounterChange (event) {
    this.counter = event.value;
    this.superCounter++
  }

}