import { SubscriptionDetailsService } from './subscriptiondetails.service';
import { Subscription } from 'rxjs/Subscription';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { Observable } from 'rxjs/Observable';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


@Component({
    selector: 'ngx-subscription-details',
    templateUrl: './subscriptiondetails.component.html',
    styles: [`
    nb-card {
      transform: translate3d(0, 0, 0);
    }
  `],
    providers: [SubscriptionDetailsService],

})
export class SubscriptionDetailsComponent implements OnInit {

   
    data: any = {};
    @Input() subscriptionmasterid: number;
    source: LocalDataSource = new LocalDataSource();
    @Output() onFinishedEditing: EventEmitter<any> = new EventEmitter();

    constructor(private service: SubscriptionDetailsService) {

    }
    ngOnInit() {
     
        this.service.getSubscriptionDetailInformation(this.subscriptionmasterid).subscribe(result => {
           this.data = result;
        });
    }
  

    deleteSubscriptionFeePaymentRequest() {
        if (window.confirm('Are you sure you want to delete?')) {

            this.service.deleteSubscriptionFeePaymentRequest({ subscriptionmasterid: this.subscriptionmasterid }).subscribe(result => {
                this.onFinishedEditing.emit(this.data);
            }, err => {
                alert(err);
            });
        }
    }
    submitSubscriptionFeePaymentRequest() {
        if (window.confirm('Are you sure you want to Submit?')) {

            this.service.submitSubscriptionFeePaymentRequest({ subscriptionmasterid: this.subscriptionmasterid }).subscribe(result => {
                this.onFinishedEditing.emit(this.data);
            }, err => {
                alert(err);
            });
        }
    }
   
  

}
