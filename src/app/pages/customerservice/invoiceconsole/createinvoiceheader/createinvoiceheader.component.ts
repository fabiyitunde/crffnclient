import { CreateInvoiceHeaderService } from './createinvoiceheader.service';
import { Component, Inject, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'ngx-create-invoice-header',
   // styleUrls: ['./individualform.component.scss'],
    templateUrl: './createinvoiceheader.component.html',
    providers: [CreateInvoiceHeaderService],
})
export class CreateInvoiceHeaderComponent implements OnInit {

    data: any = {};
    @Input() crffnmasterid: number;
    @Output() onInvoiceCreated: EventEmitter<any> = new EventEmitter();
    constructor(private service: CreateInvoiceHeaderService) {

    }
    ngOnInit() {

    }

    createinvoice() {
        this.data.crffnmasterid = this.crffnmasterid;
        this.service.createinvoice(this.data).subscribe(result => {
            this.onInvoiceCreated.emit(result);
        },
            error => {
                alert(error);
            });
    }
}
