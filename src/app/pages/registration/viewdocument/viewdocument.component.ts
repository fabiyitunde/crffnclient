

import { Component, Inject, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { webapibaseurl } from '../../../app.model';
@Component({
  selector: 'ngx-view-document',
  templateUrl: './viewdocument.component.html',
})
export class ViewDocumentComponent implements OnInit {
pdfSrc;

  constructor() {
//  console.log('XXXXXXXXXXXXXXXX');
//     PSPDFKit.load({
//       container: '#pspdfkit',
//       pdf: `${webapibaseurl}api/parameters/getUploadDocumentTypeList?docuploadid=1`,
//       licenseKey: 'BqrjgMNKaXFyV8BoVqK_Kr_hHXjeueP34VTR1s837jP9bzW74-H7r7w1L_gU0fPcxhkv7_aZhDybpBQ-d-27IasevZcOond7eTNH-8Wz6zJ22eDY8HNKO-98F-xkFHqWqumIQBUzG655tZ-jL9BODpj1pFXZTl8B6GgW1DPi8ShT2pXNCelWCSsjlq2AuqqYjOZBH6YYDRW6Mvlii6asQgCFqgm--fpw9sBmS0d2m8-vSGDFDRMr5imOQKgLzKM5waSvg1gJQvAjDNHyD_UgHfaUsd0rqedXyX1OoN7hKfe_UF_YbJn2DBrHQkD7MvEFcmlWIrfOFjijIyLvrFj9vvYVfkhM-1tp7xJblJNLaannK_6U6-UTOrTR70Vszy0zQkjBpaGwtfjkWngmgyvXndryp0h3_7Dptj1PsTVtXkBAnUKvqKmY5hz_HaZgkI19',
//     }).then(instance => {

//     }).catch(error => {
//       console.error(error.message);
//     });
  }
  ngOnInit() {

   this.pdfSrc =  `${webapibaseurl}api/registration/getUploadDocumentFile?docuploadid=1`;

  }

}
