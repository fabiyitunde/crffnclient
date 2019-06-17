import { UserMemberMappingService } from './user-member-mapping.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Component, OnInit, Input } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { Observable } from 'rxjs/Observable';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { IMultiSelectOption, IMultiSelectSettings, IMultiSelectTexts } from 'angular-2-dropdown-multiselect';
@Component({
    selector: 'ngx-user-member-mapping',
    templateUrl: './user-member-mapping.component.html',
    styles: [`
    nb-card {
      transform: translate3d(0, 0, 0);
    }
  `],
    providers: [UserMemberMappingService],
})
export class UserMemberMappingComponent implements OnInit {

    settings = {};
    showtable: boolean = false;
    userid: string;
    source: LocalDataSource = new LocalDataSource();
    unMappedMembersOptionsModel: number[];
    unMappedMembersOptions: IMultiSelectOption[];
    memberselectSettings: IMultiSelectSettings = {
        enableSearch: true,
        checkedStyle: 'fontawesome',
        buttonClasses: 'btn ',
        dynamicTitleMaxItems: 3,
        displayAllSelectedText: false,
        selectionLimit: 1,
        autoUnselect: true,
        containerClasses: 'form-control',
        itemClasses: 'dropdown-item',
        closeOnSelect: true,
        fixedTitle: false,
    };
    memberselectTextsSettings: IMultiSelectTexts = {
        checkAll: 'Select all',
        uncheckAll: 'Unselect all',
        checked: 'item selected',
        checkedPlural: 'items selected',
        searchPlaceholder: 'Find',
        searchEmptyResult: 'Nothing found...',
        searchNoRenderText: 'Type in search box to see results...',
        defaultTitle: 'Select Member',
        allSelected: 'All selected',
    };
    constructor(private service: UserMemberMappingService, private route: ActivatedRoute, private router: Router) {
        // const data = this.service.getData();


    }
    ngOnInit() {
        this.route.params.subscribe(params => {
            this.userid = params['id']; // (+) converts string 'id' to a number
            this.refreshmemberlistDropdown();
            this.loadTableData();
        });

    }
    refreshmemberlistDropdown() {
        this.service.getMemberListNotMappedToUserForAngular2DropDown(this.userid).subscribe(result => {
            this.unMappedMembersOptions = result;
        });
    }
    loadTableData() {
        this.service.getMappedMembersListForUser(this.userid).subscribe(result => {
            this.settableSettings();
            this.source.load(result);
            this.showtable = true;
        });
    }
    onDeleteConfirm(event): void {
        if (window.confirm('Are you sure you want to delete?')) {
            // event.data.userid = this.userid;
            this.service.unMapMemberFromUser(event.data).subscribe(res => {
                event.confirm.resolve();
                this.refreshmemberlistDropdown();
            }, err => {
                alert(err);
                event.confirm.reject();
            });

        } else {
            event.confirm.reject();
        }
    }


    settableSettings() {
        this.settings = {
            actions: {
                edit: false,
                add: false,
                delete: true,
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
    onChange(eventdata) {

    }
    mapMemberToUser() {

        this.service.mapMemberToUser({ userid: this.userid, crffnmasterid: this.unMappedMembersOptionsModel[0] }).subscribe(res => {
            this.loadTableData();
            this.refreshmemberlistDropdown();
        }, err => {
            alert(err);
        });
    }
}
