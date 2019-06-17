import { QuotationService } from './quotation.service';
import { Component, Inject, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'ngx-quotation',
    templateUrl: './quotation.component.html',
    providers: [QuotationService],
})
export class QuotationComponent implements OnInit {
    quotationlist: any[] = [];
    crffnmasterid: number;
    p: number = 1;
    constructor(private service: QuotationService, private route: ActivatedRoute, private router: Router) {

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
        console.log(quotation.id);
    }

}
