import { SubscriptionHomeService } from './subscriptionhome.service';

import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Component, OnInit, Input } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { SubscriptionHomeGridButtonViewDetailComponent } from './subscriptionhome-gridbutton-viewdetail';


@Component({
    selector: 'ngx-subscription-home',
    templateUrl: './subscriptionhome.component.html',
    styles: [`
    nb-card {
      transform: translate3d(0, 0, 0);
    }
  `],
    providers: [SubscriptionHomeService],


})
export class SubscriptionHomeComponent implements OnInit {

    settings = {};
    showtable: boolean = false;
    source: LocalDataSource = new LocalDataSource();
    constructor(private service: SubscriptionHomeService, private router: Router) {

    }
    ngOnInit() {

        this.service.getPendingSubscriptionFeePaymentRequestList().subscribe(data => {
            this.settableSettings();
            this.source.load(data);
            this.showtable = true;
        });
    }


    settableSettings() {
        this.settings = {
             hideSubHeader: true,
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
                    renderComponent: SubscriptionHomeGridButtonViewDetailComponent,
                    onComponentInitFunction(instance) {
                        instance.save.subscribe(row => {
                        });
                    },
                },
                year: {
                    title: 'Year',
                    type: 'string',
                    editable: false,
                },
                amount: {
                    title: 'Amount',
                    type: 'string',
                    editable: false,
                },
                narration: {
                    title: 'Narration',
                    type: 'string',
                    editable: false,
                },              
                status: {
                    title: 'Status',
                    type: 'string',
                    editable: false,
                },
            },
        };

    }
    createnewtrans() {
        this.router.navigate(['/pages/subscription/subscriptionconsole'], { queryParams: { opn: 'ADD', id: this.service.getCRFFNMasterId() } });

    }
}
