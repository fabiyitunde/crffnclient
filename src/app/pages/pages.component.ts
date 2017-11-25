import { Component, OnInit } from '@angular/core';

import { MENU_ITEMS } from './pages-menu';
import { PagesService } from './pages.services';

@Component({
  selector: 'ngx-pages',
  template: `
    <ngx-sample-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-sample-layout>
  `,
})
export class PagesComponent implements OnInit {

  menu = [];
  constructor(private pageservice: PagesService) {

  }
  ngOnInit() {
    this.pageservice.getUserMenu().subscribe(data => {
      this.menu = [];
      this.menu = data ;
    });
  }
}
