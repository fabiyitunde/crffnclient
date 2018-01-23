import { CustomerQuotationService } from './customerquotation.service';
import { Component, Inject, OnInit, Input } from '@angular/core';

@Component({
    selector: 'ngx-customer-quotation',
    templateUrl: './customerquotation.component.html',
    providers: [CustomerQuotationService],
})
export class CustomerQuotationComponent implements OnInit {
    customer: any = {};
    @Input() crffnmasterid: number;
    constructor(private service: CustomerQuotationService) {

    }
    ngOnInit() {
        this.service.getcustomerquotation(this.crffnmasterid).subscribe(data => {

            this.customer = data;
        }, err => {
            alert(err);
        });
    }

}
