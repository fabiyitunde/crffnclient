import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response, RequestMethod } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { webapibaseurl } from '../../../app.model';
@Injectable()
export class SubscriptionDetailsService {
    constructor(private http: HttpClient) {

    }


    deleteSubscriptionFeePaymentRequest(model: any) {
        const url = `${webapibaseurl}api/subscription/deleteSubscriptionFeePaymentRequest`;
        return this.http
            .post(url, model)
            .map((response: Response) => response)
            .catch((error: any) => {
                const body = error.error;
                const errMsg = (body.Message) ? body.Message : error.status ? `${error.status} - ${error.statusText}` : 'Server error';
                return Observable.throw(errMsg);
            });
    }
   
    submitSubscriptionFeePaymentRequest(model: any) {
        const url = `${webapibaseurl}api/subscription/submitSubscriptionFeePaymentRequest`;
        return this.http
            .post(url, model)
            .map((response: Response) => response)
            .catch((error: any) => {
                const body = error.error;
                const errMsg = (body.Message) ? body.Message : error.status ? `${error.status} - ${error.statusText}` : 'Server error';
                return Observable.throw(errMsg);
            });
    }

    getSubscriptionDetailInformation(subscriptionmasterid: number) {
        const url = `${webapibaseurl}api/subscription/getSubscriptionDetailInformation?subscriptionmasterid=${subscriptionmasterid}`;
        return this.http
            .get(url)
            .map((response: Response) => response)
            .catch((error: any) => {
                const body = error.error;
                const errMsg = (body.Message) ? body.Message : error.status ? `${error.status} - ${error.statusText}` : 'Server error';
                return Observable.throw(errMsg);
            });
    }

}
