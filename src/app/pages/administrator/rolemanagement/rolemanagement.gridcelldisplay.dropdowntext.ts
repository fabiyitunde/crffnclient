import { RoleManagementService } from './rolemanagement.service';
import { filter } from 'rxjs/operator/filter';
import { Component, Input, OnInit } from '@angular/core';

import { ViewCell } from 'ng2-smart-table';

@Component({
  template: `
    {{renderValue}}
  `,
})
export class RoleManagementGridCellDisplayDropdownTextComponent implements ViewCell, OnInit {

  renderValue: string;

  @Input() value: string | number;
  @Input() rowData: any;
  constructor(private service: RoleManagementService) {

  }
  ngOnInit() {

    this.service.roletypedata$.subscribe(data => {
      this.renderValue = (<any> data).filter(a => a.value === this.value)[0].title;
    });

  }

}
