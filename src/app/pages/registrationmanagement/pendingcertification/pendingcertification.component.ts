import { PendingCertificationGridButtonViewDetailComponent } from './pendingcertification-gridbutton-viewdetail';
import { PendingCertificationService } from './pendingcertification.service';


import { Router } from '@angular/router';

import { Subscription } from 'rxjs/Subscription';

import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';


@Component({
    selector: 'ngx-pending-certification',
    templateUrl: './pendingcertification.component.html',
    styles: [`
    nb-card {
      transform: translate3d(0, 0, 0);
    }
  `],
  providers: [PendingCertificationService],


})
export class PendingCertificationComponent implements OnInit {

    settings = {};
    showtable: boolean = false;
    source: LocalDataSource = new LocalDataSource();
    constructor(private service: PendingCertificationService, private router: Router) {

    }
    ngOnInit() {

        this.service.getPendingCertificationList().subscribe(data => {
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
                    renderComponent: PendingCertificationGridButtonViewDetailComponent,
                    onComponentInitFunction(instance) {
                        instance.save.subscribe(row => {
                           // this.router.navigate(['pages/registrationmanagement/verificationconsole', row.id]);
                            //  alert(`${row.name} saved!`);
                        });
                    },
                },
            },
        };

    }

}
