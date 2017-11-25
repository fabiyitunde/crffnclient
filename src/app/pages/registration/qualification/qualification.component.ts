import { Subscription } from 'rxjs/Subscription';
import { QualificationTypeDisplayComponent } from './qualificationTypedisplay.component';
import { QualificationService } from './qualification.service';
import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { Observable } from 'rxjs/Observable';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { SmartTableService } from '../../../@core/data/smart-table.service';

@Component({
    selector: 'ngx-qualification',
    templateUrl: './qualification.component.html',
    styles: [`
    nb-card {
      transform: translate3d(0, 0, 0);
    }
  `],


})
export class QualificationComponent implements OnInit {

    settings = {};
    showtable: boolean = false;

    source: LocalDataSource = new LocalDataSource();

    constructor(private service: QualificationService) {
        // const data = this.service.getData();


    }
    ngOnInit() {
        this.service.loadQualificationTypeList();
        this.service.qualificationtypedata$.subscribe(cacheddata => {
            this.settableSettings(cacheddata);
            this.loadTableData();
        });

        // this.service.getQualificationTypeList().subscribe(res => {
        //     this.settableSettings(res);
        //   this.loadTableData();
        // });

    }
    loadTableData() {
        this.service.getQualificationList().subscribe(quallist => {
            this.source.load(quallist);
            this.showtable = true;
        });
    }
    onDeleteConfirm(event): void {
        if (window.confirm('Are you sure you want to delete?')) {
            this.service.deleteQualificationRecord(event.data).subscribe(res => {
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
        event.newData.id = 0;
        this.service.createQualificationRecord(event.newData).subscribe(res => {
            event.newData.id = res;
            event.confirm.resolve(event.newData);
            // this.loadTableData();
        }, err => {
            alert(err);
            event.confirm.reject();
        });
    }
    onUpdateConfirm(event): void {
        this.service.updateQualificationRecord(event.newData).subscribe(res => {
            event.confirm.resolve(event.newData);
            // this.loadTableData();
        },
            err => {
                alert(err);
                event.confirm.reject();
            });
    }
    settableSettings(qualificationtypelist) {
        this.settings = {
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
                    type: 'number',
                    editable: false,
                },
                instituition: {
                    title: 'Instituition Name',
                    type: 'string',
                },
                qualificationType: {
                    title: 'Qualification',
                    type: 'custom',
                    renderComponent: QualificationTypeDisplayComponent,
                    editor: {
                        type: 'list',
                        config: {
                            list: qualificationtypelist,
                        },
                    },
                },
                yearOfGraduation: {
                    title: 'YearOfGraduation',
                    type: 'number',
                },
                remarks: {
                    title: 'Remarks',
                    type: 'string',
                },
            },
        };

    }

}
