import { InvoiceMasterDetailService } from './invoicemasterdetail.service';

import { Component, Inject, OnInit, Input } from '@angular/core';
import { saveAs } from 'file-saver';
import { ActivatedRoute, Router } from '@angular/router';
import { Http, ResponseContentType } from '@angular/http';
import { webapibaseurl } from '../../../app.model';
@Component({
  selector: 'invoicemasterdetail',
  providers: [InvoiceMasterDetailService],
  templateUrl: './invoicemasterdetail.component.html',
  styleUrls: ['./invoicemasterdetail.component.scss']
})
export class InvoicemasterdetailComponent implements OnInit {

  header: any = {};
  paymentlist: any[] = [];
  invoicedata: any = {};
  invoicemasterid: number;

  pdfSrc;
  constructor(private service: InvoiceMasterDetailService, private http: Http, private route: ActivatedRoute, private router: Router) {

  }
  ngOnInit() {



    this.route.params.subscribe(params => {
      this.invoicemasterid = +params['id'];
      this.getinvoicedetails();


    });

  }

  getinvoicedetails() {
    this.service.getinvoicedetails(this.invoicemasterid).subscribe(result => {

      this.invoicedata = result.header;
    });

  }
  returnToList() {

    this.router.navigate(['pages/administrator/approveinvoice']);
  }


}