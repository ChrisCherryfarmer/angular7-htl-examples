import { Component } from '@angular/core';
import { Person } from './models/person'

@Component({
  selector: 'htl-typescript',
  templateUrl: './typescript.component.html'
})
export class TypescriptComponent {

  constructor() {
    const person = new Person('Max', 'Mustermann', 18);
    console.log('Ganzer Name: ' + person.ganzerName() + person.alter);

  }


}
