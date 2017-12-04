import { ActivatedRoute, Router } from '@angular/router';
import { Component, Inject, OnInit, Input } from '@angular/core';

@Component({
    selector: 'ngx-invoice-console',
    templateUrl: './invoiceconsole.component.html',
})
export class InvoiceConsoleComponent implements OnInit {
    crffnmasterid: number;
    invoicemasterid: number;
    showaddnewinvoice: boolean = false;
    showeditinvoice: boolean = false;
    constructor(private route: ActivatedRoute, private router: Router) {

    }
    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            const opn = params['opn'];
            const id = +params['id'];
            if (opn === 'ADD') {
                this.crffnmasterid = id;
                this.showaddnewinvoice = true;
            } else {
                this.invoicemasterid = id;
                this.showeditinvoice = true;
            }
        });
    }
    onInvoiceCreated(arg) {
        this.invoicemasterid = arg;
        this.showaddnewinvoice = false;
        this.showeditinvoice = true;
    }
    onFinishedEditingInvoice(arg) {
        this.router.navigate(['pages/customerservice/customerdashboard', arg.crffmasterid]);
    }
    close() {
              this.router.navigate(['pages/home']);
    }
}
