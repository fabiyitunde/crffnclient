import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { POFService } from './../pof.service';
import { NewPOFTransactionDetailService } from './newpoftransactiondetail.service';


import { Component, Inject, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'ngx-new-pof-transaction-detail',
    // styleUrls: ['./individualform.component.scss'],
    templateUrl: './newpoftransactiondetail.component.html',
    providers: [NewPOFTransactionDetailService],
})
export class NewPOFTransactionDetailComponent implements OnInit {

    data: any = {};
    POFChargeList: any[] = [];

    constructor(private service: NewPOFTransactionDetailService, private pofservice: POFService,
        private activeModal: NgbActiveModal) {

    }
    ngOnInit() {
        this.service.getPOFTransactionChargesList(this.pofservice.poftransactionmasterid).subscribe(result => {
            this.POFChargeList = [];
            this.POFChargeList = result;
        });

    }

    createPOFTransactionDetail() {
        this.data.poftransactionmasterid = this.pofservice.poftransactionmasterid;
        this.service.createPOFTransactionDetail(this.data).subscribe(result => {
            this.pofservice.poftransactionDetailAdded(result);
            this.activeModal.close();
        },
            error => {
                alert(error);
            });
    }
    closemodal() {
        this.activeModal.close();
    }
}
