import { CorporateFormDetailService } from './corporateformdetail.service';

import { Component, Inject, OnInit, Input } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Component({
    selector: 'ngx-corporate-form-detail',
    templateUrl: './corporateformdetail.component.html',
    providers: [CorporateFormDetailService],
})
export class CorporateFormDetailComponent implements OnInit {

    qualificationlist: any[] = [];
    uploadeddocuments: any[] = [];
    header: any = {};
    @Input() crffmasterid: number;
    constructor(private service: CorporateFormDetailService, private router: Router) {

    }
    ngOnInit() {

        this.service.getCorporateRegistrationInfoDetail(this.crffmasterid).subscribe(result => {
            this.header = result.header;
            this.qualificationlist = result.qualificationlist;
            this.uploadeddocuments = result.uploadeddocuments;
        });
    }
    
}
