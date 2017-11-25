import { InvoicesService } from './invoices.service';
import { Component, Inject, OnInit, Input } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Component({
    selector: 'ngx-invoices',
    templateUrl: './invoices.component.html',
    providers: [InvoicesService],
})
export class InvoicesComponent implements OnInit {

    invoicelist: any[] = [];
    constructor(private service: InvoicesService, private router: Router) {

    }
    ngOnInit() {
        this.service.getmemberinvoicelist().subscribe(result => {
            this.invoicelist = [];
            this.invoicelist = result;
        });
    }
    proceedtopayment(invoiceheader) {
      
        this.router.navigate(['pages/registration/payments', invoiceheader.id]);
    }
}
