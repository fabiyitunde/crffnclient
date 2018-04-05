import { PaymentGatewayService } from './paymentgateway.service';

import { Component, Inject, OnInit, Input } from '@angular/core';
import { saveAs } from 'file-saver';
import { ActivatedRoute, Router } from '@angular/router';
import { Http, ResponseContentType } from '@angular/http';
import { webapibaseurl } from '../../../app.model';
@Component({
    selector: 'ngx-paymentgateway',
    templateUrl: './paymentgateway.component.html',
    providers: [PaymentGatewayService],
})
export class PaymentGatewayComponent implements OnInit {


    @Input() invoicemasterid: number;
    invoice: number;

    constructor(private service: PaymentGatewayService, private http: Http, private route: ActivatedRoute, private router: Router) {
        this.route.params.subscribe(params => {
            this.invoicemasterid = +params['id'];


        });
    }
    ngOnInit() {


        this.route.params.subscribe(params => {
            this.invoicemasterid = +params['id'];


        });


    }

    proceedtopayment() {

        this.router.navigate(['pages/registration/payments', this.invoicemasterid]);
    }


}
