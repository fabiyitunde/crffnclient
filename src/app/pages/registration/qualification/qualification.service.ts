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
export class QualificationService {
    private qualificationtypedataSubject = new ReplaySubject<Response>(1);
    qualificationtypedata$: Observable<Response> = this.qualificationtypedataSubject.asObservable();
    constructor(private http: HttpClient) {

    }


      loadQualificationTypeList() {
        const url = `${webapibaseurl}api/registration/getQualificationTypeList`;
         this.http
            .get(url)
            .map((response: Response) => response)
            .subscribe(res => this.qualificationtypedataSubject.next(res));
    }
    getQualificationList() {
        const url = `${webapibaseurl}api/registration/getQualificationList`;
        return this.http
            .get(url)
            .map((response: Response) => response)
            .catch((error: any) => {
                const body = error.error;
                const errMsg = (body.Message) ? body.Message : error.status ? `${error.status} - ${error.statusText}` : 'Server error';
                return Observable.throw(errMsg);
            });
    }
    createQualificationRecord(model: any) {
        const url = `${webapibaseurl}api/registration/createQualificationRecord`;
        return this.http
            .post(url, model)
            .map((response: Response) => response)
            .catch((error: any) => {
                const body = error.error;
                const errMsg = (body.Message) ? body.Message : error.status ? `${error.status} - ${error.statusText}` : 'Server error';
                return Observable.throw(errMsg);
            });
    }
    updateQualificationRecord(model: any) {
        const url = `${webapibaseurl}api/registration/updateQualificationRecord`;
        return this.http
            .put(url, model)
            .map((response: Response) => response)
            .catch((error: any) => {
                const body = error.error;
                const errMsg = (body.Message) ? body.Message : error.status ? `${error.status} - ${error.statusText}` : 'Server error';
                return Observable.throw(errMsg);
            });
    }
    deleteQualificationRecord(model: any) {
        const url = `${webapibaseurl}api/registration/deleteQualificationRecord`;
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
