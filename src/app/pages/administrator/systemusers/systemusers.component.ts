import { SystemUsersService } from './systemusers.service';
import { SystemUsersGridButtonViewDetailComponent } from './systemusers-gridbutton-viewdetails';


import { Router } from '@angular/router';

import { Subscription } from 'rxjs/Subscription';

import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';


@Component({
    selector: 'ngx-system-users',
    templateUrl: './systemusers.component.html',
    styles: [`
    nb-card {
      transform: translate3d(0, 0, 0);
    }
  `],
  providers: [SystemUsersService],


})
export class SystemUsersComponent implements OnInit {

    settings = {};
    showtable: boolean = false;
    source: LocalDataSource = new LocalDataSource();
    constructor(private service: SystemUsersService, private router: Router) {

    }
    ngOnInit() {

        this.service.getSystemUsersList().subscribe(data => {
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
                email: {
                    title: 'Email',
                    type: 'string',
                    editable: false,
                },
                fullname: {
                    title: 'Full Name',
                    type: 'string',
                },
                roles: {
                    title: 'Roles',
                    type: 'string',
                },
                status: {
                    title: 'IsLockedOut',
                    type: 'string',
                },
                userid: {
                    title: '...',
                    type: 'custom',
                    renderComponent: SystemUsersGridButtonViewDetailComponent,
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
