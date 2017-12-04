import { CustomerInvoiceListGridButtonViewDetailComponent } from './customerinvoicelist-gridbutton-viewdetail';
import { CustomerInvoiceListService } from './customerinvoicelist.service';



import { Router } from '@angular/router';

import { Subscription } from 'rxjs/Subscription';

import { Component, OnInit, Input } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';


@Component({
    selector: 'ngx-customer-invoice-list',
    templateUrl: './customerinvoicelist.component.html',
    styles: [`
    nb-card {
      transform: translate3d(0, 0, 0);
    }
  `],
    providers: [CustomerInvoiceListService],


})
export class CustomerInvoiceListComponent implements OnInit {

    settings = {};
    showtable: boolean = false;
    source: LocalDataSource = new LocalDataSource();
    @Input() crffnmasterid: number;
    constructor(private service: CustomerInvoiceListService, private router: Router) {

    }
    ngOnInit() {

        this.service.getCustomerInvoiceList(this.crffnmasterid).subscribe(data => {
            this.settableSettings();
            this.source.load(data);
            this.showtable = true;
        });
    }


    settableSettings() {
        this.settings = {
            actions: {
                edit: false,
                add: false,
                delete: false,
            },
            attr: {
                class: 'table table-striped table-condensed table-responsive text-nowrap',
            },
            columns: {
                id: {
                    title: '...',
                    type: 'custom',
                    renderComponent: CustomerInvoiceListGridButtonViewDetailComponent,
                    onComponentInitFunction(instance) {
                        instance.save.subscribe(row => {
                        });
                    },
                },
                category: {
                    title: 'Category',
                    type: 'string',
                    editable: false,
                },
                invoiceamount: {
                    title: 'Invoice Amount',
                    type: 'string',
                    editable: false,
                },
                refdate: {
                    title: 'Invoice Date',
                    type: 'string',
                },
                status: {
                    title: 'Status',
                    type: 'string',
                },
                narration: {
                    title: 'Narration',
                    type: 'string',
                },
            },
        };

    }

}
