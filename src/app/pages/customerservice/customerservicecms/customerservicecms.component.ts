import { CustomerServiceCmsService } from './customerservicecms.service';
import { Component, Inject, OnInit, Input } from '@angular/core';

import './ckeditor.loader';
import 'ckeditor';




@Component({
    selector: 'ngx-customer-about-cms',
    templateUrl: './customerservicecms.component.html',
    providers: [CustomerServiceCmsService],
})
export class CustomerServiceCmsComponent implements OnInit {
    customer: any = {};
    @Input() crffnmasterid: number;
    constructor(private service: CustomerServiceCmsService) {

    }
    ngOnInit() {

    }

}

