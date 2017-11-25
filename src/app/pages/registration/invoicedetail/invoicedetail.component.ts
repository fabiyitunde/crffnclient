import { InvoiceDetailService } from './invoicedetail.service';

import { Component, Inject, OnInit, Input } from '@angular/core';

@Component({
    selector: 'ngx-invoicedetail',
    templateUrl: './invoicedetail.component.html',
    providers: [InvoiceDetailService],
})
export class InvoiceDetailComponent implements OnInit {

    header: any = {};
    lineitems: any[] = [];
    @Input() invoicemasterid: number;
    constructor(private service: InvoiceDetailService) {

    }
    ngOnInit() {
        this.service.getmemberinvoice(this.invoicemasterid).subscribe(result => {
            this.lineitems = [];
            this.lineitems = result.lineitems;
            this.header = result.header;
        });
    }
}
