import { DocumentUploadSetupService } from './documentuploadsetup.service';
import { filter } from 'rxjs/operator/filter';
import { Component, Input, OnInit } from '@angular/core';

import { ViewCell } from 'ng2-smart-table';

@Component({
  template: `
    {{renderValue}}
  `,

})
export class UploadDocumentTypeDisplayComponent implements ViewCell, OnInit {

  renderValue: string;

  @Input() value: string | number;
  @Input() rowData: any;
  constructor(private service: DocumentUploadSetupService) {

  }
  ngOnInit() {

    this.service.uploadDocumenttypedata$.subscribe(data => {

      this.renderValue = (<any> data).filter(a => a.value === <number> this.value)[0].title;
    });

  }

}
