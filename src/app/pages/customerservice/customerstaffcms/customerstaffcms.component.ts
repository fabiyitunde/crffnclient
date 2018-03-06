import { CustomerStaffCmsService } from './customerstaffcms.service';
import { Component, Inject, OnInit, Input } from '@angular/core';
import { NgUploaderOptions } from 'ngx-uploader';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { webapibaseurl } from '../../../app.model';


@Component({
    selector: 'ngx-customer-staff-cms444',
    templateUrl: './customerstaffcms.component.html',
    providers: [CustomerStaffCmsService],
})
export class CustomerStaffCmsComponent implements OnInit {



    public defaultPicture = 'assets/img/theme/no-photo.png';
    uploadInProgress: boolean = false;
    data: any = {};

    public profile: any = {
        picture: 'assets/img/app/profile/Nasta.png',
    };
    public uploaderOptions: NgUploaderOptions = {
        url: `${webapibaseurl}api/Account/saveProfilePicture`,
        data: { username: JSON.parse(localStorage.getItem('userinfo')).userName },

    };


    ngOnInit() {
        this.route.params.subscribe(params => {
            this.crffnmasterid = +params['id']; // (+) converts string 'id' to a number

        });

    }



    createStaff() {
        this.data.crffnmasterid = this.crffnmasterid;

        this.service.createstaff(this.data).subscribe(result => {
            alert('Staff Saved SuccessFully');
            console.log('success')

        },
            error => {
                alert(error);
            });
    }




    @Input() crffnmasterid: number;
    constructor(private service: CustomerStaffCmsService, private route: ActivatedRoute, private router: Router) {

    }


}

