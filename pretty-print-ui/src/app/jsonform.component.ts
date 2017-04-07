import { Component } from '@angular/core';
import { JsonText } from './jsontext';

@Component({
  selector: 'json-form',
  templateUrl: './jsonform.component.html'
})
export class JsonFormComponent {

  model = new JsonText(1, '{ "abc" : "def" }');

  submitted = false;

  onSubmit() { this.submitted = true; }
}
