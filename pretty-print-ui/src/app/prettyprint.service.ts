import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';

import { JsonText } from './jsontext';

@Injectable()
export class PrettyPrintService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private prettyPrintUrl = 'http://localhost/print';  // URL to web api

  constructor(private http: Http) { }

  prettyPrint(jsonData): Promise<JsonText> {
    alert(this.prettyPrintUrl);
    return this.http.post(this.prettyPrintUrl, JSON.stringify(jsonData), {headers: this.headers})
    .toPromise()
    .then(res => this.process(res))
    .catch(this.handleError);
  }
  
   process(res) : JsonText {
    alert ("processed: ");
    return new JsonText(res.json().data);
  }

  private handleError(error: any): Promise<any> {
     alert ("error " + error.message || error);
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
