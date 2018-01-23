import { Component, OnInit } from '@angular/core';

import { MENU_ITEMS } from './public-menu';


@Component({
  selector: 'ngx-public',
  template: `
  <ngx-header></ngx-header>
  <div class="col-md=8" >
  <router-outlet></router-outlet>
   </div>
  `,

})
export class PublicComponent implements OnInit {

  menu = MENU_ITEMS;
  constructor() {

  }
  ngOnInit() {

  }
}
