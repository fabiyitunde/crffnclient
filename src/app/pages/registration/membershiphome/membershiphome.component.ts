import { Component, Input, Output, EventEmitter } from '@angular/core';
import { RegistrationService } from '../registration.service';
import { MembershipType } from '../registration.model';
import { ActivatedRoute, Router } from '@angular/router';
import { MembershiphomeService } from './membershiphome.service';
@Component({
    selector: 'ngx-membership-home',
    templateUrl: './membershiphome.component.html',
    providers: [MembershiphomeService, RegistrationService],
    styleUrls: ['./membershiphome.component.scss'],
})
export class MembershipHomeComponent {
    membershipstatus: any = {};
    membertypelist: any[] = [];
    membershiptype: MembershipType;
    crrfnmasterid: number;
    dashboard: boolean = true;

    forwardersid: number;

    constructor(private service: RegistrationService, route: ActivatedRoute, private router: Router) {
        this.service.getMembershipHomePageData().subscribe(result => {
            this.membershipstatus = result;
        });



        this.service.getCRFFNMasterInfo().subscribe(result => {
            this.membershiptype = <MembershipType>result.category;
            this.crrfnmasterid = result.id;
            console.log(this.crrfnmasterid);
        });

    }
    newtransaction() {

        this.router.navigate(['/pages/pof/poftransconsole'], { queryParams: { opn: 'ADD', id: this.service.getCRFFNMasterId() } });
    }
    quotation() {
        this.forwardersid = this.service.getCRFFNMasterId();
        this.router.navigate(["/pages/customerservice/quotation"], { queryParams: { id: this.forwardersid } })

    }
    registrationdata() {
        this.router.navigate(['/pages/registration/submitapplication']);
    }
    createaboutcms() {
        this.forwardersid = this.service.getCRFFNMasterId();
        this.router.navigate(["/pages/customerservice/aboutcms"], { queryParams: { id: this.forwardersid } })

    }
    createstaffcms() {
        this.forwardersid = this.service.getCRFFNMasterId();
        this.router.navigate(['/pages/customerservice/staffcms/'], { queryParams: { id: this.forwardersid } });



    }
    createservicecms() {
        this.forwardersid = this.service.getCRFFNMasterId();
        this.router.navigate(['/pages/customerservice/servicecms/'], { queryParams: { id: this.forwardersid } });

    }

    createcontactcms() {

        this.forwardersid = this.service.getCRFFNMasterId();
        this.router.navigate(['/pages/customerservice/contactcms/'], { queryParams: { id: this.forwardersid } });
    }


}


