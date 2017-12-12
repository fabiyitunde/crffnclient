import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response, RequestMethod } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { webapibaseurl } from '../../../app.model';
@Injectable()
export class NewSubscriptionService {

    constructor(private http: HttpClient) {

    }

    createSubscriptionFeePaymentRequest(model: any) {
        const url = `${webapibaseurl}api/subscription/createSubscriptionFeePaymentRequest`;
        return this.http
            .post(url, model)
            .map((response: Response) => response)
            .catch((error: any) => {
                const body = error.error;
                const errMsg = (body.Message) ? body.Message : error.status ? `${error.status} - ${error.statusText}` : 'Server error';
                return Observable.throw(errMsg);
            });
    }
    getYearList() {
        var today = new Date();
        let currentyear: number = today.getFullYear();
        var list: any[] = [];
        for (var i = 0; i <= 10; i++) {
            let calculatedyear = currentyear - (10 - i);
            list.push({id:calculatedyear,description:calculatedyear});
        }
        return list;
    }
    getCurrentSubscriptionFeeForMember() {
        const url = `${webapibaseurl}api/subscription/getCurrentSubscriptionFeeForMember`;
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
