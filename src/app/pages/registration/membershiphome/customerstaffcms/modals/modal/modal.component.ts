import { Input, Output, Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NgUploaderOptions } from 'ngx-uploader';
import { UploadedFile } from 'ngx-uploader';
import { ModalService } from './modal.service';
import { webapibaseurl } from '../../../../../../app.model';

@Component({
  selector: 'ngx-modal',
  template: `
    <div class="modal-header">
      <span>Upload Staff Image</span>
      <button class="close" aria-label="Close" (click)="closeModal()">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
    <ngx-ba-picture-uploader [picture]="profile.picture" [defaultPicture]="defaultPicture" [uploaderOptions]="uploaderOptions" 
     ></ngx-ba-picture-uploader>


    
    </div>
    <div class="modal-footer">
      <button class="btn btn-md btn-primary" (click)="uploadImage()">Upload Image</button>
    </div>
  `,

  providers: [ModalService],
})
export class ModalComponent {
  windowClass: number;
  staffid: number;
  modalHeader: string;
  modalContent = ` 
`;

  public defaultPicture = 'assets/images/default.png';
  uploadInProgress: boolean = false;

  id: number;
  public profile: any = {
    picture: 'assets/images/default.png',

  };

  public uploaderOptions: NgUploaderOptions;

  constructor(private activeModal: NgbActiveModal, private service: ModalService, ) { this.id = this.windowClass; }
  ngOnInit() {


    console.log(this.id);
    this.uploaderOptions = {
      url: `${webapibaseurl}api/ffinformation/savestaffprofilepicture`,
      data: { staffid: this.windowClass },


    };
    // this.service.getProfilePicture().subscribe(data => this.profile.picture = 'data:image/png;base64,' + data);
  }


  closeModal() {
    this.activeModal.close();
  }


  uploadImage() {
    console.log(this.windowClass);





    this.closeModal();


  }
}

