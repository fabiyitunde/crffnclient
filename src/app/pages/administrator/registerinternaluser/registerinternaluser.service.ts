import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response, RequestMethod } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { webapibaseurl } from '../../../app.model';
import { ReplaySubject } from 'rxjs/ReplaySubject';

@Injectable()
export class RegisterInternalUserService {
    private roletypedataSubject = new ReplaySubject<Response>(1);
    roletypedata$: Observable<Response> = this.roletypedataSubject.asObservable();

    constructor(private http: HttpClient) {

    }




    loadRoleTypeList() {
        const url = `${webapibaseurl}api/account/getRoleTypeListForGridDropdown`;
        return this.http
            .get(url)
            .map((response: Response) => response)
            .catch((error: any) => {
                const body = error.error;
                const errMsg = (body.Message) ? body.Message : error.status ? `${error.status} - ${error.statusText}` : 'Server error';
                return Observable.throw(errMsg);
            });

    }


    registerInternalUser(model: any) {
        const url = `${webapibaseurl}api/account/registerInternalUser`;

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