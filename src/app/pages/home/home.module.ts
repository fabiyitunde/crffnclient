
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { MyMembersGridButtonViewMemberDetailComponent } from './mymembers/mymembers.gridbutton.viewmemberdetail';
import { MyMembersComponent } from './mymembers/mymembers.component';
import { UiFeaturesModule } from './../ui-features/ui-features.module';

import { ManageIndividualFormComponent } from './../registration/manageindividualform/manageindividualform.component';

import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';

import { HomeService } from './home.service';
import { HomeComponent } from './home.component';
import { RegistrationModule } from '../registration/registration.module';

@NgModule({
  imports: [
    ThemeModule, UiFeaturesModule, Ng2SmartTableModule,RegistrationModule
  ],
  declarations: [HomeComponent, MyMembersComponent, MyMembersGridButtonViewMemberDetailComponent],
  providers: [HomeService],
  entryComponents: [MyMembersGridButtonViewMemberDetailComponent],
  exports: [HomeComponent]
})
export class HomeModule { }
