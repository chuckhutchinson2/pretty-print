import { Component, OnInit } from '@angular/core';
import { JsonText } from './jsontext';
import { PrettyPrintService } from './prettyprint.service';

@Component({
  selector: 'json-form',
  templateUrl: './jsonform.component.html',
  providers: [PrettyPrintService]
})
export class JsonFormComponent implements OnInit {

  model = new JsonText('');

  constructor(private prettyPrintService: PrettyPrintService) { }

  prettyPrint(): void {
      this.prettyPrintService.prettyPrint(this.model.jsontext).then(model => this.model = model);
  }

  onSubmit() {
    this.prettyPrint();
  }

  ngOnInit(): void {
    return;
  }
}
