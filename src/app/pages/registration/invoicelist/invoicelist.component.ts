import { InvoiceListService } from './invoicelist.service';
import { Component, Inject, OnInit, Input } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Component({
    selector: 'ngx-invoicelist',
    templateUrl: './invoicelist.component.html',
    providers: [InvoiceListService],
})
export class InvoiceListComponent implements OnInit {

    invoicelist: any[] = [];
    constructor(private service: InvoiceListService, private router: Router) {

    }
    ngOnInit() {
        this.service.getmemberinvoicelist().subscribe(result => {
            this.invoicelist = [];
            this.invoicelist = result;
        });
    }
    proceedtoinvoice(invoiceheader) {

        this.router.navigate(['pages/registration/invoicemasterdetail', invoiceheader.id]);
        console.log(invoiceheader.id);
    }
}
