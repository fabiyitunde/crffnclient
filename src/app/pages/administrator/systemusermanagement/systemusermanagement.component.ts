import { SystemUserManagementService } from './systemusermanagement.service';

import { Component, Inject, OnInit, Input } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'ngx-system-user-management',
    templateUrl: './systemusermanagement.component.html',
    providers: [SystemUserManagementService],
})
export class SystemUserManagementComponent implements OnInit {

    user: any= {};
    constructor(private service: SystemUserManagementService, private route: ActivatedRoute, private router: Router) {

    }
    ngOnInit() {
        this.route.params.subscribe(params => {
            const userid = params['id']; // (+) converts string 'id' to a number
            this.service.getSystemUserById(userid).subscribe(result => {
                console.log(result);
                this.user = result;
            });
        });

    }


}
