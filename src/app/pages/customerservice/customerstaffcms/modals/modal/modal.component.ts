import { Component, NgZone, OnInit, Inject, Output, EventEmitter, ElementRef, ViewChild, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NgUploaderOptions, UploadedFile, UploadRejected } from 'ngx-uploader';
import { webapibaseurl } from '../../../../../app.model';
import { FormBuilder, FormGroup, Validators, FormsModule, FormControl, FormControlName } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { ModalService } from "./modal.service"
@Component({
  selector: 'ngx-modal',
  templateUrl: './modal.component.html',

  providers: [ModalService]
})
export class ModalComponent {

  @Input() crffnmasterid: number;
  @Input('staffid') staffid: string;
  fileToUpload: File = null;
  data: any = {};
  uploadid: number;
  imagefile: string;
  aboutusitemtypeid: number;
  imageUrl: string = 'assets/images/Portrait_Placeholder.png';
  public fileUploaderOptions: any = {};
  modalHeader: string;
  modalContent = ` `;
  spinner: boolean;
  uploadInProgress: boolean;
  uploadCompleted: boolean;
  @Output() getstafflist: EventEmitter<any> = new EventEmitter();


  constructor(private activeModal: NgbActiveModal, private service: ModalService, private route: ActivatedRoute, private router: Router, private fb: FormBuilder, private http: HttpClient, ) { }
  ngOnInit() {
    this.route.queryParams.subscribe(params => {


      const forwarderID = +params['id'];

      this.crffnmasterid = forwarderID;
      this.uploadid = this.data.id;


    });
  }

  handleFileInput(file: FileList) {
    this.fileToUpload = file.item(0);

    var reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
    }


    reader.readAsDataURL(this.fileToUpload);


  }

  closeModal() {
    this.activeModal.close();
    this.spinner = false;
  }

  onSubmit() {
    this.spinner = true;
    this.uploadInProgress = true;
    this.data.staffid = this.staffid;

    this.service.saveStaffProfilePicture(this.staffid, this.fileToUpload).subscribe(result => {

      console.log('success')
      this.imageUrl = 'assets/images/Portrait_Placeholder.png';




    },


      completed => {
        this.uploadInProgress = false;
        this.uploadCompleted = true;
        this.spinner = false;

        alert(completed);

      });


    //this.closeModal();


  }



}
