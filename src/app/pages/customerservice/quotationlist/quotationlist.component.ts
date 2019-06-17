import { QuotationListService } from './quotationlist.service';
import { Component, Inject, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'ngx-quotation-list',
  templateUrl: './quotationlist.component.html',
  providers: [QuotationListService],
})
export class QuotationListComponent implements OnInit {
  quotationlist: any[] = [];
  crffnmasterid: number;
  p: number = 1;
  constructor(private service: QuotationListService, private route: ActivatedRoute, private router: Router) {

  }
  ngOnInit() {
    this.route.queryParams.subscribe(params => {


      const forwarderID = +params['id'];

      this.crffnmasterid = forwarderID;

    });

    this.service.getquotationlist(this.crffnmasterid).subscribe(data => {
      console.log(this.crffnmasterid)
        ; this.quotationlist = data;
    }, err => {
      alert(err);
    });
  }


  quotationdetail(quotation) {

    this.router.navigate(['pages/customerservice/quotationdetailview', quotation.id]);

  }

}
