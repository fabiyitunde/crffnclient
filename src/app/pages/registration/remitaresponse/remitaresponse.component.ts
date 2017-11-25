import { RemitaResponseService } from './remitaresponse.service';

import { Component, Inject, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
    selector: 'ngx-remita-response',
    templateUrl: './remitaresponse.component.html',
    providers: [RemitaResponseService],
})
export class RemitaResponseComponent implements OnInit {


    remitapaytransid: number;
    paytransdetail: any = {};
    showremitadetail: boolean = false;
    constructor(private service: RemitaResponseService, private route: ActivatedRoute, private router: Router) {

    }
    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            const orderid = params['orderID']; // (+) converts string 'id' to a number
            this.service.registerRemitaInstantResponse({ orderid: orderid }).subscribe(res => {
                this.service.getRemitaPaymentTransactionDetailsWithOrderId(orderid).subscribe(result => {
                    this.remitapaytransid = result.id;
                    this.paytransdetail = result;
                    this.showremitadetail = true;
                });
            }, err => {
                alert(err);
            });

        });
    }

}
