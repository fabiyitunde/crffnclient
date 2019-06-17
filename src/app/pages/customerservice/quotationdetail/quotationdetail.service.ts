import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response, RequestMethod } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { webapibaseurl } from '../../../app.model';

@Injectable()
export class QuotationDetailService {
  // private headers: Headers;
  // private options: RequestOptions;

  constructor(private http: HttpClient) {

  }
  getFreightTransportTypeList() {
    const url = `${webapibaseurl}api/ffinformation/getFreightTransportTypeList`;
    return this.http
      .get(url)
      .map((response: Response) => response)
      .catch((error: any) => {
        const body = error.error;
        const errMsg = (body.Message) ? body.Message : error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        return Observable.throw(errMsg);
      });
  }

  getPOFTransactionTypeList() {
    const url = `${webapibaseurl}/api/ffinformation/getPOFTransactionTypeList`;
    return this.http
      .get(url)
      .map((response: Response) => response)
      .catch((error: any) => {
        const body = error.error;
        const errMsg = (body.Message) ? body.Message : error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        return Observable.throw(errMsg);
      });
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

  getPOFChargeList(freighttransporttypeid: number) {
    const url = `${webapibaseurl}/api/ffinformation/getpofchargelist?freighttransporttypeid=${freighttransporttypeid}`;
    return this.http
      .get(url)
      .map((response: Response) => response)
      .catch((error: any) => {
        const body = error.error;
        const errMsg = (body.Message) ? body.Message : error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        return Observable.throw(errMsg);
      });
  }

  createQuotationDetail(model: any) {
    const url = `${webapibaseurl}api/ffinformation/createquotationdetail`;

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
