import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response, RequestMethod } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { webapibaseurl } from '../../../app.model';
@Injectable()
export class SubmitApplicationService {
    // private headers: Headers;
    // private options: RequestOptions;

    constructor(private http: HttpClient) {

    }

    getIndividualMemberCRFFNRegistrationInfo() {
        const url = `${webapibaseurl}api/registration/getIndividualMemberCRFFNRegistrationInfo`;
        return this.http
            .get(url)
            .map((response: Response) => response)
            .catch((error: any) => {
                const body = error.error;
                const errMsg = (body.Message) ? body.Message : error.status ? `${error.status} - ${error.statusText}` : 'Server error';
                return Observable.throw(errMsg);
            });
    }
    submitindividualmemberApplicationForm(model: any) {
        const url = `${webapibaseurl}api/registration/submitindividualmemberApplicationForm`;

        return this.http
            .post(url, model)
            .map((response: Response) => {
                const returnbody = response;
                return returnbody; //   alert(JSON.stringify(user));
            })
            .catch((error: any) => {
                const body = error.error;
                const errMsg = (body.Message) ? body.Message :
                    error.status ? `${error.status} - ${error.statusText}` : 'Server error';
                return Observable.throw(errMsg);
            });
    }

}
