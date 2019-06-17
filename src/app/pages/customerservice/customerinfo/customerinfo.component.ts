import { CustomerInfoService } from './customerinfo.service';
import { Component, Inject, OnInit, Input } from '@angular/core';

@Component({
    selector: 'ngx-customer-info',
    templateUrl: './customerinfo.component.html',
    providers: [CustomerInfoService],
})
export class CustomerInfoComponent implements OnInit {
    customer: any = {};
    imageUrl: string = 'assets/images/default-image.jpg';
    @Input() crffnmasterid: number;
    constructor(private service: CustomerInfoService) {

    }
    ngOnInit() {
        this.service.getcustomerinfo(this.crffnmasterid).subscribe(data => {
            data.picture = 'data:image/png;base64,' + data.picture;
            this.customer = data;
            this.imageUrl = this.customer.picture;
        }, err => {
            alert(err);
        });
    }

}
