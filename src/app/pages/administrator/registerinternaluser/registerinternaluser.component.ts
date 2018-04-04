import { Component, Inject, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NB_AUTH_OPTIONS_TOKEN } from '@nebular/auth/auth.options';
import { getDeepFromObject } from '@nebular/auth/helpers';
import { RegisterInternalUserService } from './registerinternaluser.service';
import { NbAuthResult, NbAuthService } from '@nebular/auth/services/auth.service';

@Component({
    selector: 'registerinternaluser',
    templateUrl: './registerinternaluser.component.html',
    providers: [RegisterInternalUserService]
})
export class RegisterInternalUserComponent implements OnInit {
    roletype: any[] = [];
    userid: string;
    user: any = {};

    renderValue: string;
    @Input() value: string | number;
    @Input() rowData: any;

    ngOnInit() {


        this.service.loadRoleTypeList().subscribe(result => {
            this.roletype = [];
            this.roletype = result;
        });
    }
    constructor(protected service: RegisterInternalUserService,
        @Inject(NB_AUTH_OPTIONS_TOKEN) protected config = {},
        protected router: Router, private route: ActivatedRoute) {


    }




    createnewuser() {

        this.service.registerInternalUser(this.user).subscribe(result => {
            alert('Record Saved SuccessFully');
            this.router.navigate(['/pages/administrator/systemusers']);
        },
            error => {
                alert(error);
            });



    }
}
