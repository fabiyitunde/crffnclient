
import { CustomerStaffCmsService } from './customerstaffcms.service';
import { Component, Inject, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { webapibaseurl } from '../../../app.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgUploaderOptions, UploadedFile, UploadRejected } from 'ngx-uploader';
import { ModalComponent } from './modals/modal/modal.component';
import 'rxjs/add/operator/take';


@Component({
    selector: 'ngx-customer-staff-cms444',
    templateUrl: './customerstaffcms.component.html',
    providers: [CustomerStaffCmsService],

})
export class CustomerStaffCmsComponent implements OnInit {


    imageUrl: string = 'assets/images/avatar.png';
    public defaultPicture = 'assets/images/avatar.png';
    uploadInProgress: boolean = false;
    data: any = {};
    stafflist: any[] = [];

    staffImage: any = {} = 'assets/images/avatar.png';

    @Output() staffid: number;
    crffnmasterid: number;
    constructor(private service: CustomerStaffCmsService, private route: ActivatedRoute, private router: Router, private modalService: NgbModal) {

    }
    ngOnInit() {
        this.route.queryParams.subscribe(params => {


            const forwarderID = +params['id'];

            this.crffnmasterid = forwarderID;

        });
        this.getstafflist();
        this.getstaffimage();

    }
    onUploadCompleted(data: any) {
        alert('Complete');

    }


    getstafflist() {

        this.service.getstafflist(this.crffnmasterid).subscribe(result => {
            this.stafflist = [];
            this.stafflist = result;
        });

    }

    getstaffimage() {

        this.service.getstaffprofilepicture(this.crffnmasterid).subscribe(result => {
            result.picture = 'data:image/png;base64,' + result.picture;
            this.staffImage = result;

        }, err => {

        });
    }


    staffinformation() {
        const staffinformation = []
        for (let x of this.stafflist) {
            const found = this.staffImage.filter(y => y.staffid === x.staffid).shift();
            if (found)
                staffinformation.push({ ...x, ...found });

        }
        staffinformation.push(... this.staffImage.filter(z => this.stafflist.map(x => x.staffid).indexOf(z.staffid) === -1))
    }






    deleteStaff(staffid) {
        if (window.confirm('Are you sure you want to delete?')) {

            this.service.deletestaff({ staffid: staffid }).subscribe(result => {
                this.getstafflist();
            }, err => {
                alert(err);
            });

        };

    }

    showSmallModal(staffid) {
        const activeModal = this.modalService.open(ModalComponent, { size: 'sm', container: 'nb-layout', windowClass: staffid });
        (<ModalComponent>activeModal.componentInstance).staffid = staffid;

        this.staffid = staffid;
        console.log(staffid);
        activeModal.componentInstance.modalHeader = 'Upload Image';

        activeModal.result.then((result) => {
            this.getstafflist();

        }).catch((result) => {
            console.log(result);
        });



    }








    public uploaderOptions: NgUploaderOptions = {
        url: `${webapibaseurl}api/ffinformation/saveStaffProfilePicture`,
        data: { staffid: this.staffid },

    };






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






}

