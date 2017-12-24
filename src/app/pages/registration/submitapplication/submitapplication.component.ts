import { IndividualFormComponent } from './../individualform/individualform.component';
import { SubmitApplicationService } from './submitapplication.service';
import { Component, Inject, OnInit, Input } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Component({
    selector: 'ngx-submit-application',
    templateUrl: './submitapplication.component.html',
    providers: [SubmitApplicationService],
})
export class SubmitApplicationComponent implements OnInit {

    membertypeid: number;
    isNotSubmitted: boolean = false;
    crffnmasterid: number;
    constructor(private service: SubmitApplicationService, private router: Router) {

    }
    ngOnInit() {

        this.service.getCRFFNMasterInfo().subscribe(result => {
            this.crffnmasterid = result.id;
            this.membertypeid = result.category;
            this.isNotSubmitted = result.registrationstatusTypeId == 1;
        });
    }
    submitindividualmemberApplicationForm() {
        if (confirm('Are You Sure')) {
            this.service.submitindividualmemberApplicationForm({ id: this.crffnmasterid }).subscribe(result => {

                this.router.navigate(['pages/registration/invoices']);
            },
                error => {
                    alert(error);
                });
        }

    }
    submitCorporateRegistrationRecord() {
        if (confirm('Are You Sure')) {
            this.service.submitCorporateRegistrationRecord({ crffnmasterid: this.crffnmasterid }).subscribe(result => {

                this.router.navigate(['pages/registration/invoices']);
            },
                error => {
                    alert(error);
                });
        }
    }

}
