import { Component, ViewChild, Input, Output, EventEmitter, ElementRef, Renderer } from '@angular/core';
import { NgUploaderOptions } from 'ngx-uploader';

@Component({
  selector: 'ngx-ba-picture-uploader',
  styleUrls: ['./baPictureUploader.scss'],
  templateUrl: './baPictureUploader.html',
})
export class BaPictureUploaderComponent {





  @Input() defaultPicture: string = '';
  @Input() picture: string = '';

  @Input() uploaderOptions: NgUploaderOptions = { url: '' };
  @Input() canDelete: boolean = true;

  @Output() onUpload = new EventEmitter<any>();
  @Output() onUploadCompleted = new EventEmitter<any>();

  @ViewChild('fileUpload') public _fileUpload: ElementRef;


  public uploadInProgress: boolean;
  public uploadCompleted: boolean;
  constructor(private renderer: Renderer) {
  }

  beforeUpload(uploadingFile): void {
    let files = this._fileUpload.nativeElement.files;

    if (files.length) {
      const file = files[0];
      this._changePicture(file);

      if (!this._canUploadOnServer()) {
        uploadingFile.setAbort();
      } else {
        this.uploadInProgress = true;
      }
    }
  }

  bringFileSelector(): boolean {
    this.renderer.invokeElementMethod(this._fileUpload.nativeElement, 'click');
    return false;
  }

  removePicture(): boolean {
    this.picture = '';
    return false;
  }

  _changePicture(file: File): void {
    const reader = new FileReader();
    reader.addEventListener('load', (event: Event) => {
      this.picture = (<any>event.target).result;
    }, false);
    reader.readAsDataURL(file);
  }

  _onUpload(data): void {
    console.log(data);
    if (data['done'] || data['abort'] || data['error']) {
      this._onUploadCompleted(data);
    } else {
      this.onUpload.emit(data);
      this.uploadCompleted = true;
      this.uploadInProgress = false;
    }
  }

  _onUploadCompleted(data): void {

    this.onUploadCompleted.emit(data);

  }

  _canUploadOnServer(): boolean {
    return !!this.uploaderOptions['url'];
  }
}
