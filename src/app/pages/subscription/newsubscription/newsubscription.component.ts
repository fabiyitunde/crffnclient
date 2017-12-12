
import { Component, Inject, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NewSubscriptionService } from './newsubscription.service';

@Component({
    selector: 'ngx-new-subscription',
    templateUrl: './newsubscription.component.html',
    providers: [NewSubscriptionService],
})
export class NewSubscriptionComponent implements OnInit {

    data: any = {};
    yearlist: any[] = [];
    subscriptionfee: string;
    @Input() crffnmasterid: number;
    @Output() onNewSubscriptionCreated: EventEmitter<any> = new EventEmitter();
    constructor(private service: NewSubscriptionService) {

    }
    ngOnInit() {
        this.yearlist = this.service.getYearList();
        this.service.getCurrentSubscriptionFeeForMember().subscribe(result => {
            this.subscriptionfee = result;          
        });
    }

    createSubscriptionFeePaymentRequest() {
        this.data.crffnmasterid = this.crffnmasterid;
        this.service.createSubscriptionFeePaymentRequest(this.data).subscribe(result => {
            this.onNewSubscriptionCreated.emit(result);
        }, error => {
            alert(error);
        });
    }
}
