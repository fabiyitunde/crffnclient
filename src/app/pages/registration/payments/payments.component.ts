import { PaymentsService } from './payments.services';

import { Component, Inject, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
    selector: 'ngx-payments',
    templateUrl: './payments.component.html',
    providers: [PaymentsService],
})
export class PaymentsComponent implements OnInit {

    paymentlist: any[] = [];
    invoicemasterid: number;
    constructor(private service: PaymentsService, private route: ActivatedRoute, private router: Router) {

    }
    ngOnInit() {
        this.route.params.subscribe(params => {
            this.invoicemasterid = +params['id']; // (+) converts string 'id' to a number
            this.service.getpaymentlist(this.invoicemasterid).subscribe(result => {
                this.paymentlist = [];
                this.paymentlist = result;
            });
        });

    }
    createPaymentTransactionRecord() {
        this.service.createPaymentTransactionRecord({ invoicemasterid: this.invoicemasterid }).subscribe(result => {
            this.router.navigate(['pages/registration/processpayment', result]);
        }, err => {
            alert(err);
        });
    }
    openpaymentdetails(paymentitem: any) {
        this.router.navigate(['pages/registration/paymentdetails', paymentitem.id]);
    }
}
