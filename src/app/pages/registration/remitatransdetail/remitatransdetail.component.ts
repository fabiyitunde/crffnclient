import { RemitaTransDetailService } from './remitatransdetail.service';

import { Component, Inject, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
    selector: 'ngx-remita-trans-detail',
    templateUrl: './remitatransdetail.component.html',
    providers: [RemitaTransDetailService],
})
export class RemitaTransDetailComponent implements OnInit {

   @Input() remitapaytransid: number;
    paytransdetail: any = {};
    data: any = {};
    invoicemasterid: number;
    showinvoice: boolean = false;
    constructor(private service: RemitaTransDetailService, private route: ActivatedRoute, private router: Router) {

    }
    ngOnInit() {
          this.service.getRemitaPaymentTransactionDetails(this.remitapaytransid).subscribe(result => {
                 this.invoicemasterid = result.invoicemasterid;
                this.paytransdetail = result;
                this.showinvoice = true;
            });

    }
  
}
