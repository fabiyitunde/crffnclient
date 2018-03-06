import { CustomerStaffCmsService } from './customerstaffcms.service';
import { Component, Inject, OnInit, Input } from '@angular/core';
import { NgUploaderOptions } from 'ngx-uploader';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { webapibaseurl } from '../../../../app.model';
import { RegistrationService } from '../../registration.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalsComponent } from './modals/modals.component';
import { ModalComponent } from './modals/modal/modal.component';

@Component({
    selector: 'ngx-customer-staff-cms',
    templateUrl: './customerstaffcms.component.html',
    providers: [CustomerStaffCmsService],
})
export class CustomerStaffCmsComponent implements OnInit {



    public defaultPicture = 'assets/img/theme/no-photo.png';
    uploadInProgress: boolean = false;
    data: any = {};
    stafflist: any[] = [];
    staffPicture: any;


    public profile: any = {
        picture: 'assets/img/app/profile/Nasta.png',
    };
    public uploaderOptions: NgUploaderOptions = {
        url: `${webapibaseurl}api/Account/saveProfilePicture`,
        data: { username: JSON.parse(localStorage.getItem('userinfo')).userName },

    };


    ngOnInit() {

        this.getstafflist();

    }

    getstafflist() {
        this.service.getstafflist(this.crffnmasterid).subscribe(result => {
            this.stafflist = [];
            this.stafflist = result;
        });

    }

    createStaff() {
        this.data.crffnmasterid = this.crffnmasterid;

        this.service.createstaff(this.data).subscribe(result => {
            alert('Staff Saved SuccessFully');
            console.log('success')
            this.data.name = "";
            this.data.email = "";
            this.data.position = "";
            this.getstafflist();

        },
            error => {
                alert(error);
            });
    }




    deleteStaff(staffid) {
        if (window.confirm('Are you sure you want to delete?')) {

            this.service.deleteStaff({ staffid: staffid }).subscribe(result => {
                this.getstafflist();
            }, err => {
                alert(err);
            });
        }
    }

    showSmallModal() {
        const activeModal = this.modalService.open(ModalComponent, { size: 'sm', container: 'nb-layout' });

        activeModal.componentInstance.modalHeader = 'Small Modal';
    }
    uploadImage(staffid) {
        if (window.alert('Image has been Uploaded')) {

            this.service.uploadImage({ staffid: staffid }).subscribe(result => {
                this.getstafflist();
            }, err => {
                alert(err);
            });
        }

    }
    @Input() crffnmasterid: number;
    constructor(private service: CustomerStaffCmsService, private route: ActivatedRoute, private router: Router, private modalService: NgbModal) {

    }


}

