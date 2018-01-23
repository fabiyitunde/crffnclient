import { CustomerLocationService } from './customerlocation.service';
import { Component, Inject, OnInit, Input } from '@angular/core';

@Component({
    selector: 'ngx-customer-location',
    templateUrl: './customerlocation.component.html',
    providers: [CustomerLocationService],
})
export class CustomerLocationComponent implements OnInit {
    customer: any = {};
    @Input() crffnmasterid: number;
    constructor(private service: CustomerLocationService) {

    }
    ngOnInit() {
        this.service.getcustomerlocation(this.crffnmasterid).subscribe(data => {

            this.customer = data;
        }, err => {
            alert(err);
        });
    }

}
