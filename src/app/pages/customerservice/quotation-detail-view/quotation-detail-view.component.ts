import { Component, Inject, OnInit, Input } from '@angular/core';
import { QuotationDetailViewService } from './quotation-detail-view.service';

import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'quotaion-detail-view',
  templateUrl: './quotation-detail-view.component.html',
  styleUrls: ['./quotation-detail-view.component.scss'],
  providers: [QuotationDetailViewService]
})
export class QuotationDetailViewComponent implements OnInit {
  quotationid: number;
  quotationdetail: any = {};
  quotationlist: any[] = [];
  p: number = 1;
  crffnmasterid: number;
  showReply: boolean = false;

  constructor(private service: QuotationDetailViewService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {

    this.route.params.subscribe(params => {
      this.quotationid = +params['id'];


    });
    this.service.getCRFFNMasterInfo().subscribe(result => {
      this.crffnmasterid = result.id;
      console.log(this.crffnmasterid);
    });


    this.getquotation();

  }
  getquotation() {
    this.service.getquotationmasterdetail(this.quotationid).subscribe(result => {

      this.quotationdetail = result.header;
      this.quotationlist = result.lineitems;
      console.log(result);
    });
  }

  replyQuotation() {
    this.showReply = true;

  }
  backToQuotation() {

    this.router.navigate(["/pages/customerservice/quotation"], { queryParams: { id: this.crffnmasterid } })
  }

}
