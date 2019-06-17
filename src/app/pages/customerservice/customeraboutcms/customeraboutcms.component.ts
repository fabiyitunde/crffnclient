import { CustomerAboutCmsService } from './customeraboutcms.service';
import { Component, Inject, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import './ckeditor.loader';
import 'ckeditor';




@Component({
    selector: 'ngx-customer-about-cms',
    templateUrl: './customeraboutcms.component.html',
    providers: [CustomerAboutCmsService],
})
export class CustomerAboutCmsComponent implements OnInit {
    customer: any = {};
    data: any = {};
    itemid: number;
    crffnmasterid: number;

    constructor(private service: CustomerAboutCmsService, private route: ActivatedRoute, private router: Router) {

    }
    ngOnInit() {
        this.route.queryParams.subscribe(params => {


            const forwarderID = +params['id'];
            console.log(forwarderID);
            this.crffnmasterid = forwarderID;

        });

    }

    uploadText() {

    }
    uploadImage() {

    }




}

