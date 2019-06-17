import { CustomerQuotationService } from './customerquotation.service';
import { Component, Inject, OnInit, Input } from '@angular/core';

@Component({
    selector: 'ngx-customer-quotation',
    templateUrl: './customerquotation.component.html',
    providers: [CustomerQuotationService],
})
export class CustomerQuotationComponent implements OnInit {
    //customer: any = {};
    data: any = {};
    quotationmasterid: number;
    freighttransporttypeid: number;

    showquotationdetail: boolean = false;
    showquotationmaster: boolean = true;

    @Input() crffnmasterid: number;
    constructor(private service: CustomerQuotationService) {

    }
    ngOnInit() {



    }

    createQuotation() {
        this.data.crffnmasterid = this.crffnmasterid;

        this.service.createQuotation(this.data).subscribe(result => {
            this.quotationmasterid = parseInt(result);

            alert('Quotation Header Created');



            this.showquotationmaster = false;
            this.showquotationdetail = true;



        },
            error => {
                alert(error);
            });
    }

}
