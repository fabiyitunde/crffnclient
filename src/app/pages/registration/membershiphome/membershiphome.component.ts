import { Component, Input, Output, EventEmitter } from '@angular/core';
import { RegistrationService } from '../registration.service';
import { MembershipType } from '../registration.model';
import { ActivatedRoute, Router } from '@angular/router';
import { MembershiphomeService } from './membershiphome.service';
@Component({
    selector: 'ngx-membership-home',
    templateUrl: './membershiphome.component.html',
    providers: [MembershiphomeService],
})
export class MembershipHomeComponent {
    membershipstatus: any = {};
    membertypelist: any[] = [];
    membershiptype: MembershipType;
    crrfnmasterid: number;
    dashboard: boolean = true;
    staffcms: boolean = false;

    constructor(private service: RegistrationService, route: ActivatedRoute, private router: Router) {
        this.service.getMembershipHomePageData().subscribe(result => {
            this.membershipstatus = result;
        });
        this.service.getCRFFNMasterInfo().subscribe(result => {
            this.membershiptype = <MembershipType>result.category;
            this.crrfnmasterid = result.id;

        });
    }
    newtransaction() {
        this.router.navigate(['/pages/pof/poftransconsole'], { queryParams: { opn: 'ADD', id: this.service.getCRFFNMasterId() } });
    }
    quotation() {
        this.router.navigate(['#']);
    }
    registrationdata() {
        this.router.navigate(['/pages/registration/submitapplication']);
    }

    createstaffcms() {
        this.dashboard = false;
        this.staffcms = true;
    }

}


