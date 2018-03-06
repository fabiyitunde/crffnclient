import { CustomerAboutCmsService } from './customeraboutcms.service';
import { Component, Inject, OnInit, Input } from '@angular/core';

import './ckeditor.loader';
import 'ckeditor';




@Component({
    selector: 'ngx-customer-about-cms',
    templateUrl: './customeraboutcms.component.html',
    providers: [CustomerAboutCmsService],
})
export class CustomerAboutCmsComponent implements OnInit {
    customer: any = {};
    @Input() crffnmasterid: number;
    constructor(private service: CustomerAboutCmsService) {

    }
    ngOnInit() {

    }

}

