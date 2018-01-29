import { Component, Inject, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NB_AUTH_OPTIONS_TOKEN } from '@nebular/auth/auth.options';
import { getDeepFromObject } from '@nebular/auth/helpers';
import { AuthenticationService } from '../services/index';
import { NbAuthResult, NbAuthService } from '@nebular/auth/services/auth.service';

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
})
export class NbLoginComponent implements OnInit {

    redirectDelay = 0;
    showMessages: any = {};
    provider = '';

    errors: string[] = [];
    messages: string[] = [];
    user: any = {};
    submitted = false;
    returnUrl: string;
    ngOnInit() {
        // reset login status
        this.authservice.logout();
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/pages';
    }
    constructor(protected service: NbAuthService,
        @Inject(NB_AUTH_OPTIONS_TOKEN) protected config = {},
        protected router: Router, private authservice: AuthenticationService, private route: ActivatedRoute) {

        this.redirectDelay = this.getConfigValue('forms.login.redirectDelay');
        this.showMessages = this.getConfigValue('forms.login.showMessages');
        this.provider = this.getConfigValue('forms.login.provider');
    }

    login(): void {
        this.errors = this.messages = [];
        // this.submitted = true;
        this.user.grant_type = 'password';
        this.authservice.login(this.user.username, this.user.password)
            .subscribe(ret => {
                this.submitted = false;
                this.router.navigate([this.returnUrl]);
            }, err => {
                this.submitted = false;
                this.errors.push(err);
                alert(err);
            });
    }

    getConfigValue(key: string): any {
        return getDeepFromObject(this.config, key, null);
    }
}
