import { MyMembersGridButtonViewMemberDetailComponent } from './mymembers.gridbutton.viewmemberdetail';
import { MyMembersService } from './mymembers.service';
import { LocalDataSource } from 'ng2-smart-table';
import { Component, Inject, OnInit, Input } from '@angular/core';

@Component({
    selector: 'ngx-mymembers',
    templateUrl: './mymembers.component.html',
    providers: [MyMembersService],
})
export class MyMembersComponent implements OnInit {
    settings = {};
    showtable: boolean = false;
    source: LocalDataSource = new LocalDataSource();
    constructor(private service: MyMembersService) {

    }
    ngOnInit() {
        this.service.getMyMappedMembersList().subscribe(result => {
            this.settableSettings();
            this.source.load(result);
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
                    title: ' ',
                    type: 'custom',
                    renderComponent: MyMembersGridButtonViewMemberDetailComponent,
                    onComponentInitFunction(instance) {
                        instance.save.subscribe(row => {
                        });
                    },
                },
                membershipnumber: {
                    title: 'Membership ID',
                    type: 'string',
                    editable: false,
                },
                name: {
                    title: 'Name',
                    type: 'string',
                    editable: false,
                },
                category: {
                    title: 'Member Category',
                    type: 'string',
                    editable: false,
                },

            },
        };

    }

}
