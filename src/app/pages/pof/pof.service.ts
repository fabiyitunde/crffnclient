import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response, RequestMethod } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { webapibaseurl } from '../../app.model';
import { Subject } from 'rxjs/Subject';
@Injectable()
export class POFService {
poftransactionmasterid: number;
 private poftransactionDetailAddedEventSource = new Subject<string>();
 poftransactionDetailAdded$ = this.poftransactionDetailAddedEventSource.asObservable();
    constructor(private http: HttpClient) {

    }
     poftransactionDetailAdded(detailid: string) {
    this.poftransactionDetailAddedEventSource.next(detailid);
  }
}
