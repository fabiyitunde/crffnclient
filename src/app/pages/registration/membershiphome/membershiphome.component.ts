import { Component } from '@angular/core';
import { RegistrationService } from '../registration.service';
import { MembershipType } from '../registration.model';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
    selector: 'ngx-membership-home',
    templateUrl: './membershiphome.component.html',
})
export class MembershipHomeComponent {
    membershipstatus: any = {};
    membertypelist: any[] = [];
    membershiptype: MembershipType;

    constructor(private service: RegistrationService, route: ActivatedRoute, private router: Router) {
        this.service.getMembershipHomePageData().subscribe(result => {
            this.membershipstatus = result;
        });
        this.service.getCRFFNMasterInfo().subscribe(result => {
            this.membershiptype = <MembershipType>result.category;
        });
    }



}


