import { Component, Inject, OnInit, Input } from '@angular/core';
import { HomeService } from './home.service';
@Component({
  selector: 'ngx-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  isregistered: boolean;
  displaymemberhome: boolean = true;
  constructor(private service: HomeService) {

  }
  ngOnInit() {
    this.service.getCRFFNMasterInfo().subscribe(result => {
      this.isregistered = true;
    }, err => {
      this.isregistered = false;
    });
    this.displaymemberhome = !this.service.isNotAMember();
    
  }

}
