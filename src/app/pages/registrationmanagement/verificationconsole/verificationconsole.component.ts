import { VerificationConsoleService } from './verificationconsole.service';
import { Component, Inject, OnInit, Input } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'ngx-verification-console',
    templateUrl: './verificationconsole.component.html',
    providers: [VerificationConsoleService],
})
export class VerificationConsoleComponent implements OnInit {

    membertypeid: number;
    crffnmasterid: number;
    constructor(private service: VerificationConsoleService, private route: ActivatedRoute, private router: Router) {

    }
    ngOnInit() {
        this.route.params.subscribe(params => {
            this.crffnmasterid = +params['id']; // (+) converts string 'id' to a number
            this.service.getCRFFNMasterInfoById(this.crffnmasterid).subscribe(result => {
                this.membertypeid = result.membertypeid;
            });
        });

    }
    verifyRegistrationInformation() {
        if (confirm('Are You Sure')) {
            this.service.verifyRegistrationInformation({ crffnmasterId: this.crffnmasterid }).subscribe(result => {

                this.router.navigate(['pages/registrationmanagment/pendingverification']);
            },
                error => {
                    alert(error);
                });
        }

    }

}
