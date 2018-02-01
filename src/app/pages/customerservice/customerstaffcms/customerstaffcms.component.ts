import { CustomerStaffCmsService } from './customerstaffcms.service';
import { Component, Inject, OnInit, Input } from '@angular/core';
import { NgUploaderOptions } from 'ngx-uploader';


import { webapibaseurl } from '../../../app.model';


@Component({
    selector: 'ngx-customer-staff-cms',
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
        this.service.getProfilePicture().subscribe(data => this.profile.picture = 'data:image/png;base64,' + data);
    }
    onUpload() {
        this.uploadInProgress = true;
    }
    onUploadCompleted(data: any) {
        alert('Complete');
        this.uploadInProgress = false;
    }

    customer: any = {};
    @Input() crffnmasterid: number;
    constructor(private service: CustomerStaffCmsService) {

    }


}

