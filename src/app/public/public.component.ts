import { Component, OnInit } from '@angular/core';

import { MENU_ITEMS } from './public-menu';


@Component({
  selector: 'ngx-public',
  template: `
    <ngx-sample-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-sample-layout>
  `,
  
})
export class PublicComponent implements OnInit {

    menu = MENU_ITEMS;
  constructor() {

  }
  ngOnInit() {
    
  }
}
