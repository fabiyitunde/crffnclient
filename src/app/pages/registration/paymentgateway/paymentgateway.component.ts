import { InvoiceDetailService } from './paymentgateway.service';

import { Component, Inject, OnInit, Input } from '@angular/core';
import { saveAs } from 'file-saver';
import { ActivatedRoute, Router } from '@angular/router';
import { Http, ResponseContentType } from '@angular/http';
import { webapibaseurl } from '../../../app.model';
@Component({
    selector: 'ngx-paymentgateway',
    templateUrl: './paymentgateway.component.html',
    providers: [InvoiceDetailService],
})
export class PaymentGatewayComponent implements OnInit {

    header: any = {};
    lineitems: any[] = [];
    @Input() invoicemasterid: number;
    pdfSrc;
    constructor(private service: InvoiceDetailService, private http: Http, private route: ActivatedRoute, private router: Router) {

    }
    ngOnInit() {
        this.service.getmemberinvoice(this.invoicemasterid).subscribe(result => {
            this.lineitems = [];
            this.lineitems = result.lineitems;
            this.header = result.header;
            this.pdfSrc = `${webapibaseurl}api/invoice/getUploadedInvoicePDFFile?invoicemasterid=${this.invoicemasterid}`;

        });
    }


}
