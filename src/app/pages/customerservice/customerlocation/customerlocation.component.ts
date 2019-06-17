import { CustomerLocationService } from './customerlocation.service';
import { Component, Inject, OnInit, Input } from '@angular/core';

@Component({
    selector: 'ngx-customer-location',
    templateUrl: './customerlocation.component.html',
    providers: [CustomerLocationService],
})
export class CustomerLocationComponent implements OnInit {
    customer: any = {};
    contactlist: any[] = [];
    @Input() crffnmasterid: number;
    constructor(private service: CustomerLocationService) {

    }
    ngOnInit() {
        this.getcontactlist();

    }
    getcontactlist() {
        this.service.getContactList(this.crffnmasterid).subscribe(result => {
            this.contactlist = [];
            this.contactlist = result;
        });

    }
}
