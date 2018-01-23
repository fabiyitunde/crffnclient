import { CustomerAboutService } from './customerabout.service';
import { Component, Inject, OnInit, Input } from '@angular/core';

@Component({
    selector: 'ngx-customer-about',
    templateUrl: './customerabout.component.html',
    providers: [CustomerAboutService],
})
export class CustomerAboutComponent implements OnInit {
    customer: any = {};
    @Input() crffnmasterid: number;
    constructor(private service: CustomerAboutService) {

    }
    ngOnInit() {
        this.service.getcustomerabout(this.crffnmasterid).subscribe(data => {
            data.picture = 'data:image/png;base64,' + data.picture;
            this.customer = data;
        }, err => {
            alert(err);
        });
    }

}
