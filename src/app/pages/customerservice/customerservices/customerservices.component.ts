import { CustomerServicesService } from './customerservices.service';
import { Component, Inject, OnInit, Input } from '@angular/core';

@Component({
    selector: 'ngx-customer-services',
    templateUrl: './customerservices.component.html',
    providers: [CustomerServicesService],
})
export class CustomerServicesComponent implements OnInit {
    customer: any = {};
    servicelist: any[] = [];
    @Input() crffnmasterid: number;
    constructor(private service: CustomerServicesService) {

    }
    ngOnInit() {
        this.getservicelist();
    }

    getservicelist() {
        this.service.getservicelist(this.crffnmasterid).subscribe(result => {
            this.servicelist = [];
            this.servicelist = result;
        });

    }


}
