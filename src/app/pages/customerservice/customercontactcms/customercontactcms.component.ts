import { CustomerContactCmsService } from './customercontactcms.service';
import { Component, Inject, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import './ckeditor.loader';
import 'ckeditor';




@Component({
    selector: 'ngx-customerss-contact-cms',
    templateUrl: './customercontactcms.component.html',
    providers: [CustomerContactCmsService],
})


export class CustomerContactCmsComponent implements OnInit {
    customer: any = {};
    data: any = {};
    contactlist: any[] = [];
    staffPicture: any;

    @Input() crffnmasterid: number;
    constructor(private service: CustomerContactCmsService, private route: ActivatedRoute, private router: Router, ) {

    }
    ngOnInit() {
        this.route.queryParams.subscribe(params => {


            const forwarderID = +params['id'];
            console.log(forwarderID);
            this.crffnmasterid = forwarderID;

        });
        this.getcontactlist();


    }

    getcontactlist() {
        this.service.getContactList(this.crffnmasterid).subscribe(result => {
            this.contactlist = [];
            this.contactlist = result;
        });

    }

    addcontact() {
        this.data.crffnmasterid = this.crffnmasterid;

        this.service.createContact(this.data).subscribe(result => {
            alert('Contact Saved SuccessFully');
            console.log('success')
            this.data.branch = "";
            this.data.phonenumber = "";
            this.data.email = "";
            this.data.description = "";
            this.data.website = "";
            this.getcontactlist();

        },
            error => {
                alert(error);
            });
    }




    deletecontact(contactid) {
        if (window.confirm('Are you sure you want to delete contact?')) {

            this.service.deleteContact({ locationid: contactid }).subscribe(result => {
                this.getcontactlist();
            }, err => {
                alert(err);
            });
        }
    }

}

