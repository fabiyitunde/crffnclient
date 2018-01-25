import { CustomerStaffService } from './customerstaff.service';
import { Component, Inject, OnInit, Input } from '@angular/core';

@Component({
    selector: 'ngx-customer-staff',
    templateUrl: './customerstaff.component.html',
    providers: [CustomerStaffService],
})
export class CustomerStaffComponent implements OnInit {
    customer: any = {};
    @Input() crffnmasterid: number;
    constructor(private service: CustomerStaffService) {

    }
    ngOnInit() {
        this.service.getcustomerstaff(this.crffnmasterid).subscribe(data => {

            this.customer = data;
        }, err => {
            alert(err);
        });
    }

}
