import { ActivatedRoute, Router } from '@angular/router';
import { Component, Inject, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ngx-member-details',
  templateUrl: './memberdetails.component.html',
})
export class MemberDetailsComponent implements OnInit {
  crffnmasterid: number;
  showcustomerinfo: boolean = false;
  showcustomerabout: boolean = true;
  showcustomerquote: boolean = false;
  showcustomerlocation: boolean = false;
  showcustomerservices: boolean = false;
  activeClass = "btn btn-outline-success  active";
  constructor(private route: ActivatedRoute, private router: Router) {

  }
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.crffnmasterid = +params['id']; // (+) converts string 'id' to a number
      this.showcustomerinfo = true;
      var NAME = document.getElementById("one");
      NAME.className = this.activeClass;

    });
  }
  onSelectAboutTab() {

    this.showcustomerabout = true;
    this.showcustomerquote = false;
    this.showcustomerlocation = false;
    var NAME = document.getElementById("one");
    NAME.className = this.activeClass;
    document.getElementById("two").className = "btn btn-outline-success";
    document.getElementById("three").className = "btn btn-outline-success";
    document.getElementById("four").className = "btn btn-outline-success";


  };
  onSelectServicesTab() {

    this.showcustomerabout = false;
    this.showcustomerquote = false;
    this.showcustomerlocation = false;
    this.showcustomerservices = true;
    var NAME = document.getElementById("two");
    NAME.className = this.activeClass;
    document.getElementById("one").className = "btn btn-outline-success";
    document.getElementById("three").className = "btn btn-outline-success";
    document.getElementById("four").className = "btn btn-outline-success";


  };
  onSelectQuoteTab() {

    this.showcustomerabout = false;
    this.showcustomerquote = true;
    this.showcustomerlocation = false;
    var NAME = document.getElementById("three");
    NAME.className = this.activeClass;
    document.getElementById("one").className = "btn btn-outline-success";
    document.getElementById("two").className = "btn btn-outline-success";
    document.getElementById("four").className = "btn btn-outline-success";


  }
  ;
  onSelectLocationTab() {

    this.showcustomerabout = false;
    this.showcustomerquote = false;
    this.showcustomerlocation = true;
    var NAME = document.getElementById("four");
    NAME.className = this.activeClass;
    document.getElementById("one").className = "btn btn-outline-success";
    document.getElementById("two").className = "btn btn-outline-success";
    document.getElementById("three").className = "btn btn-outline-success";



  }
}
