import { CustomerAboutService } from './customerabout.service';
import { Component, Inject, OnInit, Input } from '@angular/core';

@Component({
    selector: 'ngx-customer-about',
    templateUrl: './customerabout.component.html',
    providers: [CustomerAboutService],
})
export class CustomerAboutComponent implements OnInit {
    customer: any = {};
    imageitemlist: any[] = [];
    textitemlist: any[] = [];
    listItem: any[] = [];
    @Input() crffnmasterid: number;
    constructor(private service: CustomerAboutService) {

    }
    ngOnInit() {
        this.getCustomerInfo();

        this.getAboutItemList();
    }


    getCustomerInfo() {

        this.service.getCustomerInfo(this.crffnmasterid).subscribe(data => {
            data.picture = 'data:image/png;base64,' + data.picture;
            this.customer = data;
        }, err => {
            alert(err);
        });
    }

    getAboutItemList() {

        this.service.getAboutUsItemList(this.crffnmasterid).subscribe(data => {
            console.log("here");
            this.listItem = data;
            let list = data;
            this.imageitemlist = list.filter(item => item.aboutusitemtype === "Picture");
            this.textitemlist = list.filter(item => item.aboutusitemtype === "Text");
        }, err => {
            alert(err);
        });

    }

}
