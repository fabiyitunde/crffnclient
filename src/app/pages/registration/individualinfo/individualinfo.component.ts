import { IndividualInfoService } from './individualinfo.service';
import { Component, Inject, OnInit, Input } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Component({
    selector: 'ngx-individual-info',
    templateUrl: './individualinfo.component.html',
    providers: [IndividualInfoService],
})
export class IndiviualInfoComponent implements OnInit {

    qualificationlist: any[] = [];
    uploadeddocuments: any[] = [];
    header: any = {};
    @Input() crffmasterid: number;
    constructor(private service: IndividualInfoService, private router: Router) {

    }
    ngOnInit() {

        this.service.getIndividualInfoDetail(this.crffmasterid).subscribe(result => {
            this.header = result.header;
            this.qualificationlist = result.qualificationlist;
            this.uploadeddocuments = result.uploadeddocuments;
        });
    }
    submit(invoiceheader) {
        this.router.navigate(['pages/registration/payments', invoiceheader.id]);
    }
}
