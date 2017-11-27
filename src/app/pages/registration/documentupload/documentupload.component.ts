import { ActivatedRoute, Router } from '@angular/router';
import { DocumentUploadService } from './documentupload.service';
import { AuthenticationService } from './../../../services/authentication.service';
import { Component, NgZone, OnInit, Inject, Output, EventEmitter } from '@angular/core';
import { NgUploaderOptions, UploadedFile, UploadRejected } from 'ngx-uploader';
import { webapibaseurl } from '../../../app.model';

@Component({
    selector: 'ngx-document-upload',
    templateUrl: './documentupload.component.html',
    providers: [DocumentUploadService],
})
export class DocumentUploadComponent implements OnInit {
    data: any = {};

    uploadInProgress: boolean = false;
    docuploadid: number;
    public fileUploaderOptions: any = {};
    constructor(private authservice: AuthenticationService, private service: DocumentUploadService,
        @Inject(NgZone) private zone: NgZone, private router: Router, private route: ActivatedRoute) {



    }
    ngOnInit() {
        this.route.params.subscribe(params => {
            this.docuploadid = +params['id']; // (+) converts string 'id' to a number
            this.service.getUploadDocumentDetailInfo(this.docuploadid).subscribe(result => {
                this.data = result;
                this.fileUploaderOptions = new NgUploaderOptions({
                    url: `${webapibaseurl}api/registration/saveuploadedDocument`,
                    filterExtensions: true,
                    allowedExtensions: ['pdf'],
                    maxSize: 2097152,
                    data: result,
                    autoUpload: true,
                    fieldName: 'file',
                    fieldReset: true,
                    maxUploads: 2,
                    method: 'POST',
                    previewUrl: true,
                    withCredentials: false,
                });
            });
        });

    }

    onFileUploadCompleted() {
        this.uploadInProgress = false;
    }
    onFileUpload() {
        this.uploadInProgress = true;
    }
    viewdocument() {
        this.router.navigate(['pages/registration/viewdocument', this.docuploadid]);
    }
}
