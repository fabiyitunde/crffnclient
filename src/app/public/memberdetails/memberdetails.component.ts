import { ActivatedRoute, Router } from '@angular/router';
import { Component, Inject, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ngx-member-details',
  templateUrl: './memberdetails.component.html',
})
export class MemberDetailsComponent implements OnInit {
  crffnmasterid: number;
  showcustomerinfo: boolean = false;
  constructor(private route: ActivatedRoute, private router: Router) {

  }
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.crffnmasterid = +params['id']; // (+) converts string 'id' to a number
      this.showcustomerinfo = true;
    });
  }
 
}
