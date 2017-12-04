import { CustomerInfoService } from './customerinfo.service';
import { Component, Inject, OnInit, Input } from '@angular/core';

@Component({
    selector: 'ngx-customer-info',
    templateUrl: './customerinfo.component.html',
    providers: [CustomerInfoService],
})
export class CustomerInfoComponent implements OnInit {
    customer: any = {};
    @Input() crffnmasterid: number;
    constructor(private service: CustomerInfoService) {

    }
    ngOnInit() {
        this.service.getcustomerinfo(this.crffnmasterid).subscribe(data => {
            data.picture = 'data:image/png;base64,' + data.picture;
            this.customer = data;
        }, err => {
            alert(err);
        });
    }

}
