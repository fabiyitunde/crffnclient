import { PaymentDetailsService } from './paymentdetails.service';
import { Component, Inject, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
    selector: 'ngx-payment-details',
    templateUrl: './paymentdetails.component.html',
    providers: [PaymentDetailsService],
})
export class PaymentDetailsComponent implements OnInit {

    paytransid: number;
    paytransdetail: any = {};
    data: any = {};
    invoicemasterid: number;
    showinvoice: boolean = false;
    constructor(private service: PaymentDetailsService, private route: ActivatedRoute, private router: Router) {

    }
    ngOnInit() {
        this.route.params.subscribe(params => {
            this.paytransid = +params['id']; // (+) converts string 'id' to a number
            this.service.getPaymentDetails(this.paytransid).subscribe(result => {
                this.invoicemasterid = result.invoicemasterid;
                this.paytransdetail = result;
                this.showinvoice = true;
            });
        });
    }
    processpayment() {
        this.router.navigate(['pages/registration/processpayment',  this.paytransid]);
    }

}
