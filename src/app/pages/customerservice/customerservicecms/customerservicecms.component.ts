import { CustomerServiceCmsService } from './customerservicecms.service';
import { Component, Inject, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import './ckeditor.loader';
import 'ckeditor';




@Component({
    selector: 'ngx-customer-service22',
    templateUrl: './customerservicecms.component.html',
    providers: [CustomerServiceCmsService],
})
export class CustomerServiceCmsComponent implements OnInit {
    customer: any = {};
    data: any = {};
    servicelist: any[] = [];
    crffnmasterid: number;
    constructor(private service: CustomerServiceCmsService, private route: ActivatedRoute, private router: Router, ) {

    }
    ngOnInit() {
        this.route.queryParams.subscribe(params => {


            const forwarderID = +params['id'];

            this.crffnmasterid = forwarderID;

        });
        this.getservicelist();

    }

    getservicelist() {
        this.service.getservicelist(this.crffnmasterid).subscribe(result => {
            this.servicelist = [];
            this.servicelist = result;
        });

    }

    addservice() {
        this.data.crffnmasterid = this.crffnmasterid;

        this.service.createservice(this.data).subscribe(result => {
            alert('Service SuccessFully Added');
            console.log('success')
            this.data.title = "";
            this.data.body = "";

            this.getservicelist();

        },
            error => {
                alert(error);
            });
    }




    deleteService(serviceid) {
        if (window.confirm('Are you sure you want to delete service?')) {

            this.service.deleteService({ serviceofferingid: serviceid }).subscribe(result => {


            }, err => {
                alert(err);
            });
            this.getservicelist();
        }
    }

}

