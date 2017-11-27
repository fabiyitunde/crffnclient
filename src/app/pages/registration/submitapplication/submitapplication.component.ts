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
    crffmasterid: number;
    constructor(private service: SubmitApplicationService, private router: Router) {

    }
    ngOnInit() {

        this.service.getIndividualMemberCRFFNRegistrationInfo().subscribe(result => {
            this.crffmasterid = result.id;
            this.membertypeid = result.FreightForwaderCategory;
            this.isNotSubmitted = result.isNotSubmitted;
        });
    }
    submitindividualmemberApplicationForm() {
        if (confirm('Are You Sure')) {
            this.service.submitindividualmemberApplicationForm({ id: this.crffmasterid }).subscribe(result => {

                this.router.navigate(['pages/registration/invoces']);
            },
                error => {
                    alert(error);
                });
        }

    }

}
