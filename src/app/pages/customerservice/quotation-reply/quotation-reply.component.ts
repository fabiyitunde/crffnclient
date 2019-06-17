import { Component, Inject, OnInit, Input } from '@angular/core';
import { QuotationReplyService } from './quotation-reply.service';

import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'quotation-reply',
  templateUrl: './quotation-reply.component.html',
  styleUrls: ['./quotation-reply.component.scss'],
  providers: [QuotationReplyService]
})

export class QuotationReplyComponent implements OnInit {
  quotationid: number;
  data: any = {};

  showReply: boolean = true;
  constructor(private service: QuotationReplyService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {

    this.route.params.subscribe(params => {
      this.quotationid = +params['id'];


    });
  }

  submitQuotationResponse() {
    console.log('it works');
    this.data.quotationmasterid = this.quotationid;
    this.service.submitQuotationResponse(this.data).subscribe(result => {
      alert('Quotation Response Sent');

      this.data.quoteresponse = "";

      this.showReply = false;



    },
      error => {
        alert(error);
      });



  }

}
