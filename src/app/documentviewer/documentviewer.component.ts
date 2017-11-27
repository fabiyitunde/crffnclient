import { DocumentUploadService } from './../pages/registration/documentupload/documentupload.service';
import { Http , ResponseContentType} from '@angular/http';




import { Component, Inject, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { saveAs} from 'file-saver';

import { webapibaseurl } from '../app.model';

@Component({
  selector: 'ngx-document-viewer',
  templateUrl: './documentviewer.component.html',
  providers: [DocumentUploadService],
})
export class DocumentViewerComponent implements OnInit {
  pdfSrc;
  docuploadid: number;
  data: any = {};
  constructor(private http: Http, private route: ActivatedRoute, private router: Router, private service: DocumentUploadService) {

  }
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.docuploadid = +params['id']; // (+) converts string 'id' to a number
      this.service.getUploadDocumentDetailInfo(this.docuploadid).subscribe(result => {
        this.data = result;
      });
      this.pdfSrc = `${webapibaseurl}api/registration/getUploadDocumentFile?docuploadid=${this.docuploadid}`;
    });
  }
 
  download() {
   this.downloadPdf().subscribe(
        (res) => {
            saveAs(res, `${this.data.documentType}.pdf`);
        },
    );
  }
  public downloadPdf(): any {
    const url = this.pdfSrc;
    const headers: any = {};
  //  headers.append('Authorization', 'JWT ' + localStorage.getItem('id_token'));
    return this.http.get(url, {  headers: headers, responseType: ResponseContentType.Blob }).map(
      (res: any) => {
        return new Blob([res.blob()], { type: 'application/pdf' });
      });
  }

}
