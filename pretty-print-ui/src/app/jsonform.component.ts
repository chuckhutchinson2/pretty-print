import { Component, OnInit } from '@angular/core';
import { JsonText } from './jsontext';
import { Response } from '@angular/http';
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
      this.prettyPrintService.prettyPrint(this.model.jsontext).
        subscribe((res: Response) => this.model = new JsonText(res.text()), (err) => alert(err));
  }

  onSubmit() {
    this.prettyPrint();
  }

  ngOnInit(): void {
    return;
  }
}
