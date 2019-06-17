import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response, RequestMethod } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { webapibaseurl } from '../../../../app.model';
@Injectable()
export class CustomerInvoiceEditService {
    private lineitemtypedataSubject = new ReplaySubject<any>(1);
    lineitemtypedata$: Observable<any> = this.lineitemtypedataSubject.asObservable();
    constructor(private http: HttpClient) {

    }

    addInvoiceLineItem(model: any) {
        const url = `${webapibaseurl}api/invoice/addInvoiceLineItem`;
        return this.http
            .post(url, model)
            .map((response: Response) => response)
            .catch((error: any) => {
                const body = error.error;
                const errMsg = (body.Message) ? body.Message : error.status ? `${error.status} - ${error.statusText}` : 'Server error';
                return Observable.throw(errMsg);
            });
    }
    deleteInvoice(model: any) {
        const url = `${webapibaseurl}api/invoice/deleteInvoice`;
        return this.http
            .post(url, model)
            .map((response: Response) => response)
            .catch((error: any) => {
                const body = error.error;
                const errMsg = (body.Message) ? body.Message : error.status ? `${error.status} - ${error.statusText}` : 'Server error';
                return Observable.throw(errMsg);
            });
    }
    cancelInvoice(model: any) {
        const url = `${webapibaseurl}api/invoice/cancellInvoice`;
        return this.http
            .post(url, model)
            .map((response: Response) => response)
            .catch((error: any) => {
                const body = error.error;
                const errMsg = (body.Message) ? body.Message : error.status ? `${error.status} - ${error.statusText}` : 'Server error';
                return Observable.throw(errMsg);
            });
    }
    deleteInvoiceLineItem(model: any) {
        const url = `${webapibaseurl}api/invoice/deleteInvoiceLineItem`;
        return this.http
            .post(url, model)
            .map((response: Response) => response)
            .catch((error: any) => {
                const body = error.error;
                const errMsg = (body.Message) ? body.Message : error.status ? `${error.status} - ${error.statusText}` : 'Server error';
                return Observable.throw(errMsg);
            });
    }
    submitInvoice(model: any) {
        const url = `${webapibaseurl}api/invoice/submitInvoice`;
        return this.http
            .post(url, model)
            .map((response: Response) => response)
            .catch((error: any) => {
                const body = error.error;
                const errMsg = (body.Message) ? body.Message : error.status ? `${error.status} - ${error.statusText}` : 'Server error';
                return Observable.throw(errMsg);
            });
    }
    loadLineItemTypeList() {
        const url = `${webapibaseurl}api/invoice/getInvoiceLineItemTypeListForDropDown`;
        this.http
            .get(url)
            .map((response: any) => response)
            .subscribe(res => this.lineitemtypedataSubject.next(res));
    }
    getInvoiceDetails(invoicemasterid: number) {
        const url = `${webapibaseurl}api/invoice/getInvoiceDetails?invoicemasterid=${invoicemasterid}`;
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
