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
export class DocumentUploadSetupService {
    private uploadDocumenttypedataSubject = new ReplaySubject<Response>(1);
    uploadDocumenttypedata$: Observable<Response> = this.uploadDocumenttypedataSubject.asObservable();
    constructor(private http: HttpClient) {

    }

    getUploadDocumentTypeList() {
        const url = `${webapibaseurl}api/registration/getUploadDocumentTypeList`;
        return this.http
            .get(url)
            .map((response: Response) => response)
            .catch((error: any) => {
                const body = error.error;
                const errMsg = (body.Message) ? body.Message : error.status ? `${error.status} - ${error.statusText}` : 'Server error';
                return Observable.throw(errMsg);
            });
    }
    loadUploadDocumentTypeList() {
        const url = `${webapibaseurl}api/registration/getUploadDocumentTypeList`;
        this.http
            .get(url)
            .map((response: Response) => response)
            .subscribe(res => this.uploadDocumenttypedataSubject.next(res));
    }
    getUploadDocumentList() {
        const url = `${webapibaseurl}api/registration/getUploadDocumentList`;
        return this.http
            .get(url)
            .map((response: Response) => response)
            .catch((error: any) => {
                const body = error.error;
                const errMsg = (body.Message) ? body.Message : error.status ? `${error.status} - ${error.statusText}` : 'Server error';
                return Observable.throw(errMsg);
            });
    }
    createDocumentUploadRecord(model: any) {
        const url = `${webapibaseurl}api/registration/createDocumentUploadRecord`;
        return this.http
            .post(url, model)
            .map((response: Response) => response)
            .catch((error: any) => {
                const body = error.error;
                const errMsg = (body.Message) ? body.Message : error.status ? `${error.status} - ${error.statusText}` : 'Server error';
                return Observable.throw(errMsg);
            });
    }

    deleteDocumentUploadRecord(model: any) {
        const url = `${webapibaseurl}api/registration/deleteDocumentUploadRecord`;
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
