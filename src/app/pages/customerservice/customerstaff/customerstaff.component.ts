import { CustomerStaffService } from './customerstaff.service';
import { Component, Inject, OnInit, Input } from '@angular/core';

@Component({
    selector: 'ngx-customer-staff',
    templateUrl: './customerstaff.component.html',
    providers: [CustomerStaffService],
})
export class CustomerStaffComponent implements OnInit {

    stafflist: any[] = [];
    @Input() crffnmasterid: number;
    constructor(private service: CustomerStaffService) {

    }
    ngOnInit() {
        this.getstafflist();

    }
    getstafflist() {
        this.service.getstafflist(this.crffnmasterid).subscribe(result => {
            this.stafflist = [];
            this.stafflist = result;

        });




    }

}
