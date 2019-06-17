import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response, RequestMethod } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { webapibaseurl } from '../../../app.model';

@Injectable()
export class QuotationReplyService {

  constructor(private http: HttpClient) {

  }

  getCRFFNMasterId() {
    return JSON.parse(localStorage.getItem('userinfo')).crffnmasterid;
  }

  getquotationmasterdetail(quotationmasterid: number) {
    const url = `${webapibaseurl}api/ffinformation/getquotationmasterdetail?quotationmasterid=${quotationmasterid}`;
    return this.http
      .get(url)
      .map((response: Response) => response)
      .catch((error: any) => {
        const body = error.error;
        const errMsg = (body.Message) ? body.Message : error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        return Observable.throw(errMsg);
      });
  }

  getCRFFNMasterInfo() {
    const url = `${webapibaseurl}api/registration/getCRFFNMasterInfo`;
    return this.http
      .get(url)
      .map((response: Response) => {
        return response;
      })
      .catch((error: any) => {
        const body = error.error;
        const errMsg = (body.Message) ? body.Message : error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        return Observable.throw(errMsg);
      });
  }


  submitQuotationResponse(model: any) {
    const url = `${webapibaseurl}api/ffinformation/treatquotation`;

    return this.http
      .post(url, model)
      .map((response: Response) => response)
      .catch((error: any) => {
        const body = error.error;
        const errMsg = (body.Message) ? body.Message : error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        return Observable.throw(errMsg);
      });
  }


}
