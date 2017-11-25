import { ProcessPaymentService } from './processpayment.service';
import { Component, Inject, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
    selector: 'ngx-process-payment',
    templateUrl: './processpayment.component.html',
    providers: [ProcessPaymentService],
})
export class ProcessPaymentComponent implements OnInit {

    paymentTypeList: any[] = [];
    paymenttransid: number;
    paytransdetail: any = {};
    data: any = {};
    invoicemasterid: number;
    showinvoice: boolean = false;
    constructor(private service: ProcessPaymentService, private route: ActivatedRoute, private router: Router) {

    }
    ngOnInit() {
        this.route.params.subscribe(params => {
            this.paymenttransid = +params['id']; // (+) converts string 'id' to a number
            this.service.getPaymentTransactionDetail(this.paymenttransid).subscribe(result => {
                console.log(result);
                 this.invoicemasterid = result.invoicemasterid;
                this.paytransdetail = result;
                this.showinvoice = true;
            });
        });
        this.service.getRemitaPaymentTypeList().subscribe(result => {
            this.paymentTypeList = [];
            this.paymentTypeList = result;
        });
    }
    createRemitaTransactionRecord() {
        this.service.createRemitaTransactionRecord({ paymentTransactionId: this.paymenttransid, paymentType: this.data.paymentType })
            .subscribe(result => {
                this.router.navigate(['pages/registration/loadremitagateway', result]);
            }, err => {
                alert(err);
            });
    }
}
