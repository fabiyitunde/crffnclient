import {
  Component,
  NgZone,
  OnInit,
  Inject,
  Output,
  EventEmitter,
  ElementRef,
  ViewChild,
  Input
} from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { ImageService } from "./image.service";

import { NgUploaderOptions, UploadedFile, UploadRejected } from "ngx-uploader";
//import { UploadOutput, UploadInput, UploadFile, humanizeBytes, UploaderOptions } from 'ngx-uploader';

import { webapibaseurl } from "../../../../app.model";

import {
  FormBuilder,
  FormGroup,
  Validators,
  FormsModule,
  FormControl,
  FormControlName
} from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

@Component({
  selector: "ngx-about-image",
  templateUrl: "./image.component.html",
  styleUrls: ["./image.component.scss"],
  providers: [ImageService]
})
export class ImageComponent implements OnInit {
  @Input() crffnmasterid: number;
  fileToUpload: File = null;

  data: any = {};
  uploadid: number;
  htmlnote: any;
  aboutusitemtypeid: number;
  showspinner: boolean = false;
  imageUrl: string = "assets/images/default-image.jpg";
  public fileUploaderOptions: any = {};
  @ViewChild("fileInput") fileInput: ElementRef;

  form: FormGroup;

  constructor(
    private service: ImageService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const forwarderID = +params["id"];
      console.log(forwarderID);
      this.crffnmasterid = forwarderID;
      this.uploadid = this.data.id;
    });
  }

  handleFileInput(file: FileList) {
    this.fileToUpload = file.item(0);

    var reader = new FileReader();
    reader.onload = (event: any) => {
      this.showspinner = true;
      this.imageUrl = event.target.result;
    };
    reader.onloadend = (event: any) => {
      this.showspinner = false;
      this.htmlnote = reader.result;
    };

    reader.readAsDataURL(this.fileToUpload);
  }
  reloadPage() {
   window.location.reload();
}

  onSubmit(htmlnote) {
    this.data.htmlnote = this.htmlnote;

    this.data.crffnmasterid = this.crffnmasterid;
    this.data.aboutusitemtypeid = 2;

    this.service.createabout(this.data).subscribe(
      result => {
        alert("Image Uploaded SuccessFully");
        console.log("success");
        this.imageUrl = "assets/images/default-image.jpg";
        setTimeout(() => { this.reloadPage(); }, 2000);
        
      },
      error => {
        alert(error);
      }
    );
  }
}
