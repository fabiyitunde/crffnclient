import { PaymentsService } from './payments.services';

import { Component, Inject, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
    selector: 'ngx-payments',
    templateUrl: './payments.component.html',
    providers: [PaymentsService],
})
export class PaymentsComponent implements OnInit {

    remarks: string = "Payment Canceled";
    paymentlist: any[] = [];
    isDisabled: boolean = false;
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
        this.isDisabled = true;
        this.service.createPaymentTransactionRecord({ invoicemasterid: this.invoicemasterid }).subscribe(result => {
            this.router.navigate(['pages/registration/processpayment', result]);

        }, err => {
            alert(err);
            this.isDisabled = false;
        });
    }
    cancelPaymentTransaction(paymentitem: any) {
        this.service.cancelPaymentTransaction({ paymentTransactionId: paymentitem.id, remarks: this.remarks }).subscribe(result => {
            alert("Payment has been canceled successfully. Thank You ");

            this.service.getpaymentlist(this.invoicemasterid).subscribe(result => {
                this.paymentlist = [];
                this.paymentlist = result;
            });
        }, err => {
            alert(err);
        });
    }
    // cancelPaymentTransaction(paymentitem: any) {
    //     this.service.cancelPaymentTransaction({ paymentTransactionId: paymentitem.id, remarks: this.remarks }).subscribe(result => {
    //         alert("Payment has been canceled successfully. Thank You ");

    //         this.service.getpaymentlist(this.invoicemasterid).subscribe(result => {
    //             this.paymentlist = [];
    //             this.paymentlist = result;
    //         });
    //     }, err => {
    //         alert(err);
    //     });
    // }
    openpaymentdetails(paymentitem: any) {
        this.router.navigate(['pages/registration/paymentdetails', paymentitem.id]);
    }
}
