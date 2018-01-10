import { Component, Inject, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PaymentListService } from './paymentlist.service';
@Component({
    selector: 'ngx-paymentlist',
    templateUrl: './paymentlist.component.html',
    providers: [PaymentListService],
})
export class PaymentListComponent implements OnInit {

    paymentlist: any[] = [];
    @Input() invoicemasterid: number;
    constructor(private service: PaymentListService, private route: ActivatedRoute, private router: Router) {

    }
    ngOnInit() {
        console.log(this.invoicemasterid);
        this.service.getpaymentlist(this.invoicemasterid).subscribe(result => {
            this.paymentlist = [];
            this.paymentlist = result;
        });

    }
   
    openpaymentdetails(paymentitem: any) {
        this.router.navigate(['pages/registration/paymentdetails', paymentitem.id]);
    }
}
