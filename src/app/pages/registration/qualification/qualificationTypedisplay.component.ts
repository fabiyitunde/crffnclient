import { filter } from 'rxjs/operator/filter';
import { QualificationService } from './qualification.service';
import { Component, Input, OnInit } from '@angular/core';

import { ViewCell } from 'ng2-smart-table';

@Component({
  template: `
    {{renderValue}}
  `,
  
})
export class QualificationTypeDisplayComponent implements ViewCell, OnInit {

  renderValue: string;

  @Input() value: string | number;
  @Input() rowData: any;
  constructor(private service: QualificationService) {

  }
  ngOnInit() {

    this.service.qualificationtypedata$.subscribe(data => {

      // data.forEach(element => {
      //   console.log(`${element.value} : ${this.value}`);
      //   if (element.value == this.value) {
      //     this.renderValue = element.title;
      //   }
      // });
     this.renderValue = (<any> data).filter(a => a.value == this.value)[0].title;
    });

  }

}
