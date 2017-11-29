import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { ViewCell } from 'ng2-smart-table';

@Component({
  selector: 'ngx-grid-button',
  template: `
    <button class="btn btn-hero-info  btn-demo" (click)="onClick()">{{ renderValue }}</button>
  `,
})
export class GridButtonComponent implements ViewCell, OnInit {
  renderValue: string;

  @Input() value: string | number;
  @Input() rowData: any;

  @Output() save: EventEmitter<any> = new EventEmitter();

  ngOnInit() {
    this.renderValue = this.value.toString().toUpperCase();
  }

  onClick() {
    this.save.emit(this.rowData);
  }
}
