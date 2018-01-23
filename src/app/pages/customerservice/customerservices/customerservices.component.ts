import { CustomerServicesService } from './customerservices.service';
import { Component, Inject, OnInit, Input } from '@angular/core';

@Component({
    selector: 'ngx-customer-services',
    templateUrl: './customerservices.component.html',
    providers: [CustomerServicesService],
})
export class CustomerServicesComponent implements OnInit {
    customer: any = {};
    @Input() crffnmasterid: number;
    constructor(private service: CustomerServicesService) {

    }
    ngOnInit() {
        this.service.getcustomerservices(this.crffnmasterid).subscribe(data => {

            this.customer = data;
        }, err => {
            alert(err);
        });
    }

}
