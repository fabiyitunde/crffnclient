import { Component, OnInit } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from '../services/index';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ConfirmEmailService } from './confirmemail.service';
@Component({
  selector: 'ngx-confirm-email',
  templateUrl: './confirmemail.component.html',
  providers: [ConfirmEmailService],
})
export class ConfirmemailComponent implements OnInit {
  userid: string;
  token: string;
  fullname: string = 'John Hopkins';
  messagetodisplay: string = 'Congratulations You Have Successfully Registered';
  constructor(private activatedRoute: ActivatedRoute, private confirmemailservice: ConfirmEmailService) {
  }
  ngOnInit() {
    // subscribe to router event
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      this.userid = params['userid'];
      this.token = params['token'];
      this.fullname = params['fullname'].replace('+' , ' ') ;

    });
    this.confirmemailservice.confimemail(this.userid, this.token)
      .subscribe(ret => {
        alert('Email Confirmed And Account Verified');

      }, err => {
        this.messagetodisplay = err;
       // alert(err);
      });
  }
}
