import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
} from '@angular/common/http';
import { AuthenticationService } from '../services/authentication.service';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    constructor(public auth: AuthenticationService) {
        
     }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {    
        
        if (this.auth.isAuthenticated()) {            
          var  token = this.auth.getToken() || '';
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${token}`,
                },
            });
        }
          
        return next.handle(request);
    }
}
