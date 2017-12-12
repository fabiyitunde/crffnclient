import { Component } from '@angular/core';

@Component({
  selector: 'ngx-tiny-mce-page',
  template: `
    <nb-card>
      <nb-card-header>
        Tiny MCE
      </nb-card-header>
      <nb-card-body>
        <ngx-tiny-mce (editorKeyup)="editorKeyup($event)"></ngx-tiny-mce>
      </nb-card-body>
      <div>{{data}}</div>
    </nb-card>
  `,
})
export class TinyMCEComponent {
  data: any = {};
  editorKeyup(data) {
    this.data = data;
  }
}
