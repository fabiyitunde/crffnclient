import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import { webapibaseurl } from '../app.model';
@Injectable()
export class ConfirmEmailService {
    // private headers: Headers;
    // private options: RequestOptions;
    constructor(private http: Http) {
        // Creates header for post requests.
        // this.headers = new Headers({ 'Accept': 'application/json' });
        // this.options = new RequestOptions({ headers: this.headers });
    }
    confimemail(userid: string, token: string) {
        const url = `${webapibaseurl}api/Account/ConfirmEmail`;
        const params = {
            UserId: userid,
            Code: token,
        };
 const headers = new Headers({ 'Content-Type': 'application/json' });
         const options = new RequestOptions({  headers: headers });
        return this.http
            .post(url, JSON.stringify(params) )
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                const returnbody = response.json();

                return returnbody; //   alert(JSON.stringify(user));
            })
            .catch((error: any) => {
               
                const body = JSON.parse(error._body);
                const errMsg = (body.Message) ? body.Message :
                    error.status ? `${error.status} - ${error.statusText}` : 'Server error';
                return Observable.throw(errMsg);
            });
    }


}
