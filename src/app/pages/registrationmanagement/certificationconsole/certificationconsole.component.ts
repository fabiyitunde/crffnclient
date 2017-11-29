import { CertificationConsoleService } from './certificationconsole.service';
import { Component, Inject, OnInit, Input } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'ngx-certification-console',
    templateUrl: './certificationconsole.component.html',
    providers: [CertificationConsoleService],
})
export class CertificationConsoleComponent implements OnInit {

    membertypeid: number;
    crffnmasterid: number;
    constructor(private service: CertificationConsoleService, private route: ActivatedRoute, private router: Router) {

    }
    ngOnInit() {
        this.route.params.subscribe(params => {
            this.crffnmasterid = +params['id']; // (+) converts string 'id' to a number
            this.service.getCRFFNMasterInfoById(this.crffnmasterid).subscribe(result => {
                this.membertypeid = result.membertypeid;
            });
        });

    }
    certifyRegistrationInformation() {
        if (confirm('Are You Sure')) {
            this.service.certifyRegistrationInformation({ crffnmasterId: this.crffnmasterid }).subscribe(result => {

                this.router.navigate(['pages/registrationmanagment/pendingcertifications']);
            },
                error => {
                    alert(error);
                });
        }

    }

}
