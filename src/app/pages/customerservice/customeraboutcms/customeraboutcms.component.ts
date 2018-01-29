import { CustomerAboutCmsService } from './customeraboutcms.service';
import { Component, Inject, OnInit, Input } from '@angular/core';

import { CKEditorModule } from 'ng2-ckeditor';

import '../../editors/ckeditor/ckeditor.loader.ts';
import '../../editors/ckeditor/ckeditor.component.ts';

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

