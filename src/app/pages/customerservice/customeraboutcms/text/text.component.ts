import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { from } from 'rxjs/observable/from';
import { TextService } from './text.service';
@Component({
  selector: 'ngx-about-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss'],
  providers: [TextService],
})
export class TextComponent implements OnInit {
  crffnmasterid: number;
  data: any = {};
  constructor(private service: TextService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {


      const forwarderID = +params['id'];
      console.log(forwarderID);
      this.crffnmasterid = forwarderID;

    });
  }

  createAboutUs() {
    this.data.crffnmasterid = this.crffnmasterid;
    this.data.aboutusitemtypeid = 1;
    this.service.createabout(this.data).subscribe(result => {
      alert('Content SuccessFully Created');
      console.log('success')
      this.data.htmlnote = "";
    },
      error => {
        alert(error);
      });
  }

}
