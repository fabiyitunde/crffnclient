import { InvoiceMasterDetailService } from './invoicemasterdetail.service';

import { Component, Inject, OnInit, Input } from '@angular/core';
import { saveAs } from 'file-saver';
import { ActivatedRoute, Router } from '@angular/router';
import { Http, ResponseContentType } from '@angular/http';
import { webapibaseurl } from '../../../app.model';
@Component({
    selector: 'ngx-invoicemasterdetail',
    templateUrl: './invoicemasterdetail.component.html',
    providers: [InvoiceMasterDetailService],
})
export class InvoiceMasterDetailComponent implements OnInit {

    header: any = {};
    paymentlist: any[] = [];
    invoicedata: any = {};
    invoicemasterid: number;
    // @Input() invoicemasterid: number;
    pdfSrc;
    constructor(private service: InvoiceMasterDetailService, private http: Http, private route: ActivatedRoute, private router: Router) {

    }
    ngOnInit() {

        this.getinvoicedetails();
        this.getpaymentlist();

        this.route.params.subscribe(params => {
            this.invoicemasterid = +params['id'];
            this.getinvoicedetails();
            this.getpaymentlist();// (+) converts string 'id' to a number

        });
    }

    getinvoicedetails() {
        this.service.getinvoicedetails(this.invoicemasterid).subscribe(result => {

            this.invoicedata = result.header;
        });

    }
    getpaymentlist() {
        this.service.getpaymentlist(this.invoicemasterid).subscribe(result => {
            this.paymentlist = [];
            this.paymentlist = result;
        });

    }
}