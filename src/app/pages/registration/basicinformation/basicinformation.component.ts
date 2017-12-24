import { Component, Inject, OnInit, Input } from '@angular/core';
import { BasicInformationService } from './basicinformation.service';

@Component({
  selector: 'ngx-basic-information',
  templateUrl: './basicinformation.component.html',
  providers: [BasicInformationService]
})
export class BasicInformationComponent implements OnInit {
    membertypeid: number = 0;
  
  constructor(private service: BasicInformationService) {

  }
  ngOnInit() {
    this.service.getCRFFNMasterInfo().subscribe(result => {
      this.membertypeid = result.category;
    }, err => {
     // alert('Registration Required');
    });
   
    
  }

}
