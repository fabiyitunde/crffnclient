import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
// import 'rxjs/Rx';
import { webapibaseurl } from '../app.model';
// import decode from 'jwt-decode';
@Injectable()
export class AuthenticationService {
    private headers: Headers;
    private options: RequestOptions;

    constructor(private http: Http) {
        // Creates header for post requests.
        this.headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        this.options = new RequestOptions({ headers: this.headers });
    }

    login(username: string, password: string) {
        const url = `${webapibaseurl}token`;
        const params: any = {

            grant_type: 'password',
            username,
            password,
        };
        const body: string = this.encodeParams(params);
        return this.http
            .post(url, body, this.options)
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                const returnbody = response.json();
                const jsonstring: string = JSON.stringify(returnbody);
                localStorage.setItem('userinfo', jsonstring);
                return returnbody; //   alert(JSON.stringify(user));
            })
            .catch((error: any) => {
                const body = JSON.parse(error._body);
                const errMsg = (body.error_description) ? body.error_description : error.status ?
                    `${error.status} - ${error.statusText}` : 'Server error';
                return Observable.throw(errMsg);
            });
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('userinfo');
    }
    public getToken(): string {
        const userinfo = localStorage.getItem('userinfo');
if (userinfo){
return JSON.parse(userinfo).access_token;
} else{
    return "";
}

        
    }
    public getUserName(): string {
        return JSON.parse(localStorage.getItem('userinfo')).userName;
    }
    public isAuthenticated(): boolean {
        // get the token
        console.log

        const token = this.getToken();
        if(token) {
            return true;
        }else {
            return false;
        }

        // return a boolean reflecting
        // whether or not the token is expired
     //   return token != null; // tokenNotExpired(null, token);
    }
    private encodeParams(params: any): string {

        let body: string = '';

        for (let key in params) {
            if (body.length) {
                body += "&";
            }
            body += key + "=";
            body += encodeURIComponent(params[key]);
        }

        return body;
    }
}
