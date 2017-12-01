import { Router } from '@angular/router';
import { ViewCell } from 'ng2-smart-table';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'ngx-mymbers-view-member-detail-view',
  template: `
    <button class="btn btn-hero-info  btn-demo"  (click)="onClick()">{{ renderValue }}</button>
  `,
})
export class MyMembersGridButtonViewMemberDetailComponent implements ViewCell, OnInit {
  renderValue: string;

  @Input() value: string | number;
  @Input() rowData: any;

  @Output() save: EventEmitter<any> = new EventEmitter();
  id: number;
  constructor(private router: Router) {

  }
  ngOnInit() {

    this.id = <number> this.value;

    this.renderValue = 'Detail';
  }

  onClick() {
    this.router.navigate(['pages/registration/documentupload', this.id]);

  }
}
