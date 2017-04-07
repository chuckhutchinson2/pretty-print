import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { JsonText } from './jsontext';

@Injectable()
export class PrettyPrintService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private prettyPrintUrl = 'http://localhost:8080/print/';

  constructor(private http: Http) { }

  prettyPrint(jsonData): Observable<Response> {
    return this.http.post(this.prettyPrintUrl, jsonData, {headers: this.headers});
  }
}
