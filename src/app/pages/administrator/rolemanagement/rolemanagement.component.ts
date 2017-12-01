import { ActivatedRoute, Router } from '@angular/router';
import { RoleManagementGridCellDisplayDropdownTextComponent } from './rolemanagement.gridcelldisplay.dropdowntext';
import { RoleManagementService } from './rolemanagement.service';
import { Subscription } from 'rxjs/Subscription';
import { Component, OnInit, Input } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { Observable } from 'rxjs/Observable';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { SmartTableService } from '../../../@core/data/smart-table.service';

@Component({
    selector: 'ngx-role-management',
    templateUrl: './rolemanagement.component.html',
    styles: [`
    nb-card {
      transform: translate3d(0, 0, 0);
    }
  `],
    providers: [RoleManagementService]
})
export class RoleManagementComponent implements OnInit {

    settings = {};
    showtable: boolean = false;
    userid: string;
    source: LocalDataSource = new LocalDataSource();

    constructor(private service: RoleManagementService, private route: ActivatedRoute, private router: Router) {
        // const data = this.service.getData();


    }
    ngOnInit() {
        this.route.params.subscribe(params => {
            this.userid = params['id']; // (+) converts string 'id' to a number
            this.service.loadRoleTypeList();
            this.service.roletypedata$.subscribe(cacheddata => {
                this.settableSettings(cacheddata);
                this.loadTableData();
            });
        });


        // this.service.getQualificationTypeList().subscribe(res => {
        //     this.settableSettings(res);
        //   this.loadTableData();
        // });

    }
    loadTableData() {
        this.service.getUserRoleList(this.userid).subscribe(returnlist => {
            this.source.load(returnlist);
            this.showtable = true;
        });
    }
    onDeleteConfirm(event): void {
        if (window.confirm('Are you sure you want to delete?')) {
            event.data.userid = this.userid;
            this.service.removeUsrFromRole(event.data).subscribe(res => {
                event.confirm.resolve();
            }, err => {
                alert(err);
                event.confirm.reject();
            });

        } else {
            event.confirm.reject();
        }
    }
    onCreateConfirm(event): void {
        event.newData.userid = this.userid;
        this.service.addRoleToUser(event.newData).subscribe(res => {
           // event.newData.id = res;
            event.confirm.resolve(event.newData);
            this.loadTableData();
        }, err => {
            alert(err);
            event.confirm.reject();
        });
    }

    settableSettings(roletypetypelist) {
        this.settings = {
            actions: {
                edit: false,
                add: true,
                delete: true,
            },
            add: {
                addButtonContent: '<i class="nb-plus"></i>',
                createButtonContent: '<i class="nb-checkmark"></i>',
                cancelButtonContent: '<i class="nb-close"></i>',
                confirmCreate: true,
            },
            edit: {
                editButtonContent: '<i class="nb-edit"></i>',
                saveButtonContent: '<i class="nb-checkmark"></i>',
                cancelButtonContent: '<i class="nb-close"></i>',
                confirmSave: true,
            },
            delete: {
                deleteButtonContent: '<i class="nb-trash"></i>',
                confirmDelete: true,
            },
            columns: {
                id: {
                    title: 'ID',
                    type: 'string',
                    editable: false,
                },
                name: {
                    title: 'Role',
                    type: 'custom',
                    renderComponent: RoleManagementGridCellDisplayDropdownTextComponent,
                    editor: {
                        type: 'list',
                        config: {
                            list: roletypetypelist,
                        },
                    },
                },
            },
        };

    }

}
