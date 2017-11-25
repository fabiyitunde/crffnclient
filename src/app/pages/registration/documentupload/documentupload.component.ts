import { ActivatedRoute } from '@angular/router';
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

    public fileUploaderOptions: any = {};
    constructor(private authservice: AuthenticationService, private service: DocumentUploadService,
        @Inject(NgZone) private zone: NgZone, private route: ActivatedRoute) {



    }
    ngOnInit() {
        this.route.params.subscribe(params => {
            const docuploadid = +params['id']; // (+) converts string 'id' to a number
            this.service.getUploadDocumentDetailInfo(docuploadid).subscribe(result => {
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

}
