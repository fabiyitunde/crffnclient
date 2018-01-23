import { NewPOFTransactionDetailComponent } from './../newpoftransactiondetail/newpoftransactiondetail.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { POFService } from './../pof.service';
import { POFTransactionEditService } from './poftransactionedit.service';
import { Subscription } from 'rxjs/Subscription';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { Observable } from 'rxjs/Observable';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


@Component({
    selector: 'ngx-pof-transaction-edit',
    templateUrl: './poftransactionedit.component.html',
    styles: [`
    nb-card {
      transform: translate3d(0, 0, 0);
    }
  `],
    providers: [POFTransactionEditService],

})
export class POFTransactionEditComponent implements OnInit {

    settings = {};
    showtable: boolean = false;
    header: any = {};
    @Input() poftransactionmasterid: number;
    source: LocalDataSource = new LocalDataSource();
    @Output() onFinishedEditing: EventEmitter<any> = new EventEmitter();

    constructor(private service: POFTransactionEditService, private pofservice: POFService,
        private modalService: NgbModal) {

    }
    ngOnInit() {
        this.settableSettings();
        this.loadTableData();
        this.pofservice.poftransactionDetailAdded$.subscribe(result => {
            this.loadTableData();
        });
    }
    loadTableData() {
        this.service.getPOFTransactionDetailInformation(this.poftransactionmasterid).subscribe(data => {
            this.header = data.header;
            this.source.load(data.lineitems);
            this.showtable = true;
        });
    }
    onDeleteConfirm(event): void {
        if (window.confirm('Are you sure you want to delete?')) {
            this.service.deletePOFTransactionDetail({ POFTransactionDetailId: event.data.id }).subscribe(res => {
                event.confirm.resolve();
                this.loadTableData();
            }, err => {
                alert(err);
                event.confirm.reject();
            });

        } else {
            event.confirm.reject();
        }
    }

    deletePOFTransaction() {
        if (window.confirm('Are you sure you want to delete?')) {

            this.service.deletePOFTransaction({ poftransactionmasterid: this.poftransactionmasterid }).subscribe(result => {
                this.onFinishedEditing.emit(this.header);
            }, err => {
                alert(err);
            });
        }
    }
    submitPOFTransaction() {
        if (window.confirm('Are you sure you want to Submit?')) {

            this.service.submitPOFTransaction({ poftransactionmasterid: this.poftransactionmasterid }).subscribe(result => {
                this.onFinishedEditing.emit(this.header);
            }, err => {
                alert(err);
            });
        }
    }
    addnewdetail() {
        this.pofservice.poftransactionmasterid = this.poftransactionmasterid;
        const activeModal = this.modalService.open(NewPOFTransactionDetailComponent, { size: 'lg', container: 'nb-layout' });
        activeModal.componentInstance.modalHeader = 'Transaction Detail';
    }
    settableSettings() {
        this.settings = {
            hideSubHeader: true,
            actions: {
                add: false,
                edit: false,
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
                    type: 'number',
                    editable: false,
                },
                cargounit: {
                    title: 'Cargo Unit',
                    type: 'string',
                },
                unitamount: {
                    title: 'Unit Amount',
                    type: 'string',
                },
                quantity: {
                    title: 'Quantity',
                    type: 'number',
                },
                amount: {
                    title: 'Amount',
                    type: 'string',
                    editable: false,
                },
                description: {
                    title: 'Description',
                    type: 'string',
                },
                waybillnumber: {
                    title: 'Way Bill Number',
                    type: 'string',
                },
                voyagernumber: {
                    title: 'Voyager Number',
                    type: 'string',
                },
                consignee: {
                    title: 'Consignee',
                    type: 'string',
                },
            },
        };

    }

}
