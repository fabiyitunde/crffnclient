import { IndividualFormComponent } from './../individualform/individualform.component';
import { Router } from '@angular/router';
import { UploadDocumentDetailButtonComponent } from './uploaddocumentdetail-button.component';
import { UploadDocumentTypeDisplayComponent } from './uploaddocumentTypeDisplay.component';
import { DocumentUploadSetupService } from './documentuploadsetup.service';
import { Subscription } from 'rxjs/Subscription';

import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { Observable } from 'rxjs/Observable';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { SmartTableService } from '../../../@core/data/smart-table.service';

@Component({
    selector: 'ngx-document-upload-setup',
    templateUrl: './documentuploadsetup.component.html',
    styles: [`
    nb-card {
      transform: translate3d(0, 0, 0);
    }
  `],


})
export class DocumentUploadSetupComponent implements OnInit {

    settings = {};
    showtable: boolean = false;

    source: LocalDataSource = new LocalDataSource();

    constructor(private service: DocumentUploadSetupService, private router: Router) {
        // const data = this.service.getData();


    }
    ngOnInit() {
        this.service.loadUploadDocumentTypeList();
        this.service.uploadDocumenttypedata$.subscribe(cacheddata => {
            this.settableSettings(cacheddata);
            this.loadTableData();
        });

    }
    loadTableData() {
        this.service.getUploadDocumentList().subscribe(retlist => {
            this.source.load(retlist);
            this.showtable = true;
        });
    }
    onDeleteConfirm(event): void {
        if (window.confirm('Are you sure you want to delete?')) {
            this.service.deleteDocumentUploadRecord(event.data).subscribe(res => {
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
        this.service.createDocumentUploadRecord(event.newData).subscribe(res => {
            event.newData.id = res;
            event.confirm.resolve(event.newData);
            // this.loadTableData();
        }, err => {
            alert(err);
            event.confirm.reject();
        });
    }

    settableSettings(uploaddocumenttypelist) {
        this.settings = {
            actions: {
                edit: false,
            },
            add: {
                addButtonContent: '<i class="nb-plus"></i>',
                createButtonContent: '<i class="nb-checkmark"></i>',
                cancelButtonContent: '<i class="nb-close"></i>',
                confirmCreate: true,
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
                uploadDocumentType: {
                    title: 'Upload Document Type',
                    type: 'custom',
                    renderComponent: UploadDocumentTypeDisplayComponent,
                    editor: {
                        type: 'list',
                        config: {
                            list: uploaddocumenttypelist,
                        },
                    },
                },
                description: {
                    title: 'Description',
                    type: 'string',
                },
                button: {
                    title: 'Button',
                    type: 'custom',
                    renderComponent: UploadDocumentDetailButtonComponent,
                    onComponentInitFunction(instance) {
                        instance.save.subscribe(row => {
                            this.router.navigate(['pages/registration/documentupload', row.id]);
                            //  alert(`${row.name} saved!`);
                        });
                    },
                },
            },
        };

    }

}
