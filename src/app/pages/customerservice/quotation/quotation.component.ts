import { QuotationService } from './quotation.service';
import { Component, Inject, OnInit, Input } from '@angular/core';

@Component({
    selector: 'ngx-quotation',
    templateUrl: './quotation.component.html',
    providers: [QuotationService],
})
export class QuotationComponent implements OnInit {
    customer: any = {};
    @Input() crffnmasterid: number;
    constructor(private service: QuotationService) {

    }
    ngOnInit() {
        this.service.getquotation(this.crffnmasterid).subscribe(data => {

            this.customer = data;
        }, err => {
            alert(err);
        });
    }

}
