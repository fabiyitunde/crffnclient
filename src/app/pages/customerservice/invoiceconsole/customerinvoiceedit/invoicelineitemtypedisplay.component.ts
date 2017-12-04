import { CustomerInvoiceEditService } from './customerinvoiceedit.service';
import { filter } from 'rxjs/operator/filter';

import { Component, Input, OnInit } from '@angular/core';

import { ViewCell } from 'ng2-smart-table';

@Component({
  template: `
    {{renderValue}}
  `,
})
export class InvoiceLineItemTypeDisplayComponent implements ViewCell, OnInit {

  renderValue: string;

  @Input() value:  string;
  @Input() rowData: any;
  constructor(private service: CustomerInvoiceEditService) {

  }
  ngOnInit() {

    this.service.lineitemtypedata$.subscribe(data => {

      data.forEach(element => {
          if (element.value === this.value) {
            this.renderValue = element.title;
          }
      });
 
    });

  }

}
