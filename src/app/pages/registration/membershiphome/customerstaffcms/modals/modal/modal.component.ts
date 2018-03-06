import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NgUploaderOptions } from 'ngx-uploader';
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
    <ngx-ba-picture-uploader  [defaultPicture]="defaultPicture" [uploaderOptions]="uploaderOptions"
    ></ngx-ba-picture-uploader>
    
    </div>
    <div class="modal-footer">
      <button class="btn btn-md btn-primary" (click)="closeModal()">Upload Image</button>
    </div>
  `,
})
export class ModalComponent {

  modalHeader: string;
  modalContent = ` <ngx-ba-picture-uploader [picture]="profile.picture" [defaultPicture]="defaultPicture" [uploaderOptions]="uploaderOptions"
  (onUpload)="onUpload()" (onUploadCompleted)="onUploadCompleted($event)"></ngx-ba-picture-uploader>

`;

  constructor(private activeModal: NgbActiveModal) { }

  closeModal() {
    this.activeModal.close();
  }
}
