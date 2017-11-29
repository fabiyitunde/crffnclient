import { PendingVerificationViewDetailButtonComponent } from './pendingverification.viewdetail.button';
import { PendingVerificationService } from './pendingverification.service';

import { Router } from '@angular/router';

import { Subscription } from 'rxjs/Subscription';

import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';


@Component({
    selector: 'ngx-pending-verification',
    templateUrl: './pendingverification.component.html',
    styles: [`
    nb-card {
      transform: translate3d(0, 0, 0);
    }
  `],
  providers: [PendingVerificationService],


})
export class PendingVerificationComponent implements OnInit {

    settings = {};
    showtable: boolean = false;
    source: LocalDataSource = new LocalDataSource();
    constructor(private service: PendingVerificationService, private router: Router) {

    }
    ngOnInit() {

        this.service.getPendingVerificationList().subscribe(data => {
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
            columns: {
                id: {
                    title: 'ID',
                    type: 'number',
                    editable: false,
                },
                name: {
                    title: 'Name',
                    type: 'string',
                },
                membershipcategory: {
                    title: 'Membership Category',
                    type: 'string',
                },
                registrationdate: {
                    title: 'Registration Date',
                    type: 'string',
                },
                button: {
                    title: '...',
                    type: 'custom',
                    renderComponent: PendingVerificationViewDetailButtonComponent,
                    onComponentInitFunction(instance) {
                        instance.save.subscribe(row => {
                            this.router.navigate(['pages/registrationmanagement/verificationconsole', row.id]);
                            //  alert(`${row.name} saved!`);
                        });
                    },
                },
            },
        };

    }

}
