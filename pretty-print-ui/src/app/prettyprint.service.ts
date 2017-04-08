import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { JsonText } from './jsontext';

@Injectable()
export class PrettyPrintService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private prettyPrintUrl = 'http://pretty-print-dev-alb-ecs-844429651.us-east-1.elb.amazonaws.com/print';

  constructor(private http: Http) { }

  prettyPrint(jsonData): Observable<Response> {
    return this.http.post(this.prettyPrintUrl, jsonData, {headers: this.headers});
  }
}
