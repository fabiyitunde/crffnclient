import { POFHomeGridButtonViewDetailComponent } from './pofhome.gridbutton.viewdetail';
import { POFHomeService } from './pofhome.service';

import { Router } from '@angular/router';

import { Subscription } from 'rxjs/Subscription';

import { Component, OnInit, Input } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';


@Component({
    selector: 'ngx-pof-home',
    templateUrl: './pofhome.component.html',
    styles: [`
    nb-card {
      transform: translate3d(0, 0, 0);
    }
  `],
    providers: [POFHomeService],


})
export class POFHomeComponent implements OnInit {

    settings = {};
    showtable: boolean = false;
    source: LocalDataSource = new LocalDataSource();
    constructor(private service: POFHomeService, private router: Router) {

    }
    ngOnInit() {

        this.service.getPendingPOFTransactionList().subscribe(data => {
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
                    title: 'Manage',
                    type: 'custom',
                    renderComponent: POFHomeGridButtonViewDetailComponent,
                    onComponentInitFunction(instance) {
                        instance.save.subscribe(row => {
                        });
                    },
                },
                type: {
                    title: 'Type',
                    type: 'string',
                    editable: false,
                },
                category: {
                    title: 'Category',
                    type: 'string',
                    editable: false,
                },
                association: {
                    title: 'Association',
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
                narration: {
                    title: 'Narration',
                    type: 'string',
                },
            },
        };

    }
    createnewtrans() {
        this.router.navigate(['/pages/pof/poftransconsole'], { queryParams: { opn: 'ADD', id: this.service.getCRFFNMasterId() } });

    }
}
