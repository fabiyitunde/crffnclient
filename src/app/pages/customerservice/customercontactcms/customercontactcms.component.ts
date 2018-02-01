import { CustomerContactCmsService } from './customercontactcms.service';
import { Component, Inject, OnInit, Input } from '@angular/core';

import './ckeditor.loader';
import 'ckeditor';




@Component({
    selector: 'ngx-customer-contact-cms',
    templateUrl: './customercontactcms.component.html',
    providers: [CustomerContactCmsService],
})
export class CustomerContactCmsComponent implements OnInit {
    customer: any = {};
    @Input() crffnmasterid: number;
    constructor(private service: CustomerContactCmsService) {

    }
    ngOnInit() {

    }

}

