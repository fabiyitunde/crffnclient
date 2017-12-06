import { NewPOFTransactionService } from './newpoftransaction.service';

import { Component, Inject, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'ngx-new-pof-transaction',
    // styleUrls: ['./individualform.component.scss'],
    templateUrl: './newpoftransaction.component.html',
    providers: [NewPOFTransactionService],
})
export class NewPOFTransactionComponent implements OnInit {

    data: any = {};
    pofTransactionTypelist: any[] = [];
    POFTransactionAssociationlist: any[] = [];
       pofTransactioncategorylist: any[] = [];
    @Input() crffnmasterid: number;
    @Output() onNewPOFTransactionCreated: EventEmitter<any> = new EventEmitter();
    constructor(private service: NewPOFTransactionService) {

    }
    ngOnInit() {
        this.service.getPOFTransactionAssociationList().subscribe(result => {
            this.POFTransactionAssociationlist = [];
            this.POFTransactionAssociationlist = result;
        });
          this.service.getPOFTransactionTypeList().subscribe(result => {
            this.pofTransactionTypelist = [];
            this.pofTransactionTypelist = result;
        });
           this.service.getFreightTransportTypeList().subscribe(result => {
            this.pofTransactioncategorylist = [];
            this.pofTransactioncategorylist = result;
        });
    }

    createPOFTransaction() {
        this.data.crffnmasterid = this.crffnmasterid;
        this.service.createPOFTransaction(this.data).subscribe(result => {
            this.onNewPOFTransactionCreated.emit(result);
        },
            error => {
                alert(error);
            });
    }
}
