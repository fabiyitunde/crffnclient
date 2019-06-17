import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response, RequestMethod } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { webapibaseurl } from '../../../app.model';

@Injectable()
export class CustomerStaffCmsService {
    // private headers: Headers;
    // private options: RequestOptions;

    constructor(private http: HttpClient) {

    }

    getstafflist(crffnmasterid: number) {
        const url = `${webapibaseurl}api/ffinformation/getstafflist?crffnmasterid=${crffnmasterid}`;
        return this.http
            .get(url)
            .map((response: Response) => response)
            .catch((error: any) => {
                const body = error.error;
                const errMsg = (body.Message) ? body.Message : error.status ? `${error.status} - ${error.statusText}` : 'Server error';
                return Observable.throw(errMsg);
            });
    }

    getstaffprofilepicture(staffid: number) {
        const url = `${webapibaseurl}api/ffinformation/getStaffProfilePicture?staffid=${staffid}`;
        return this.http
            .get(url)
            .map((response: Response) => response)
            .catch((error: any) => {
                const body = error.error;
                const errMsg = (body.Message) ? body.Message : error.status ? `${error.status} - ${error.statusText}` : 'Server error';
                return Observable.throw(errMsg);
            });
    }

    createstaff(model: any) {
        const url = `${webapibaseurl}api/ffinformation/createstaff`;

        return this.http
            .post(url, model)
            .map((response: Response) => response)
            .catch((error: any) => {
                const body = error.error;
                const errMsg = (body.Message) ? body.Message : error.status ? `${error.status} - ${error.statusText}` : 'Server error';
                return Observable.throw(errMsg);
            });
    }
    getCRFFNMasterId() {
        return JSON.parse(localStorage.getItem('userinfo')).crffnmasterid;
    }
    deletestaff(model: any) {
        const url = `${webapibaseurl}api/ffinformation/deletestaff`;

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