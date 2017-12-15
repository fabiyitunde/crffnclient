import { InvoiceDetailService } from './invoicedetail.service';

import { Component, Inject, OnInit, Input } from '@angular/core';
import { saveAs } from 'file-saver';
import { ActivatedRoute, Router } from '@angular/router';
import { Http, ResponseContentType } from '@angular/http';
import { webapibaseurl } from '../../../app.model';
@Component({
    selector: 'ngx-invoicedetail',
    templateUrl: './invoicedetail.component.html',
    providers: [InvoiceDetailService],
})
export class InvoiceDetailComponent implements OnInit {

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
    download() {
        this.downloadPdf().subscribe(
            (res) => {
                saveAs(res, `inv${this.header.invoicenos}.pdf`);
            },
        );
    }
    public downloadPdf(): any {
        const url = this.pdfSrc;
        const headers: any = {};
        //  headers.append('Authorization', 'JWT ' + localStorage.getItem('id_token'));
        return this.http.get(url, { headers: headers, responseType: ResponseContentType.Blob })
            .map((res: any) => {
                return new Blob([res.blob()], { type: 'application/pdf' });
            });
    }
}
