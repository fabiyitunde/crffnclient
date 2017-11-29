import { MyProfileService } from './myprofile.service';
import { Component, OnInit } from '@angular/core';
import { NgUploaderOptions } from 'ngx-uploader';
import { webapibaseurl } from '../../../app.model';

@Component({
  selector: 'ngx-my-profile',
  templateUrl: './myprofile.component.html',
  providers: [MyProfileService],
})
export class MyProfileComponent implements OnInit {

  public defaultPicture = 'assets/img/theme/no-photo.png';
  uploadInProgress: boolean = false;
  data: any = {};
  public profile: any = {
    picture: 'assets/img/app/profile/Nasta.png',
  };
  public uploaderOptions: NgUploaderOptions = {
    url: `${webapibaseurl}api/Account/saveProfilePicture`,
    data: { username: JSON.parse(localStorage.getItem('userinfo')).userName },

  };
  constructor(private service: MyProfileService) {

  }

  ngOnInit() {
    this.service.getProfilePicture().subscribe(data => this.profile.picture = 'data:image/png;base64,' + data);
  }
  onUpload() {
    this.uploadInProgress = true;
  }
  onUploadCompleted(data: any) {
    alert('Complete');
    this.uploadInProgress = false;
  }
  verifyCodeAndRegisterPhoneNumber() {
    this.service.verifyCodeAndRegisterPhoneNumber({ PhoneNumber: this.data.phonenumber, Code: this.data.code })
      .subscribe(result => {
        alert(result);
      }, err => {
        alert(err);
      });
  }
  sendPhoneNumberVerificationCode() {
     this.service.sendPhoneNumberVerificationCode({ PhoneNumber: this.data.phonenumber })
      .subscribe(result => {
        alert(result);
      }, err => {
        alert(err);
      });
  }
}
