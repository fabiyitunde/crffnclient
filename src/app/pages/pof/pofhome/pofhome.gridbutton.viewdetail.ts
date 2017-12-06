import { Router } from '@angular/router';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { ViewCell } from 'ng2-smart-table';

@Component({
  selector: 'ngx-pof-home-gridbutton-viewdetail',
  template: `
    <button class="btn btn-hero-info  btn-demo" (click)="onClick()">{{ renderValue }}</button>
  `,
})
export class POFHomeGridButtonViewDetailComponent implements ViewCell, OnInit {
  renderValue: string;

  @Input() value: string | number;
  @Input() rowData: any;

  @Output() save: EventEmitter<any> = new EventEmitter();
  constructor(private router: Router) {

  }
  ngOnInit() {
    this.renderValue = '...';
  }

  onClick() {

      this.router.navigate(['/pages/pof/poftransconsole'], { queryParams: { opn: 'EDIT', id: this.value } });

  }
}
