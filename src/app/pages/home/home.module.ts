import { Ng2SmartTableModule } from 'ng2-smart-table';
import { MyMembersGridButtonViewMemberDetailComponent } from './mymembers/mymembers.gridbutton.viewmemberdetail';
import { MyMembersComponent } from './mymembers/mymembers.component';
import { UiFeaturesModule } from './../ui-features/ui-features.module';

import { ManageIndividualFormComponent } from './../registration/manageindividualform/manageindividualform.component';
import { StatusCardComponent } from './../registration/status-card/status-card.component';
import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { RegistrationService } from '../registration/registration.service';
import { HomeService } from './home.service';
import { HomeComponent } from './home.component';
import { StartRegistrationComponent } from '../registration/startregistration/startregistration.component';
import { MembershipHomeComponent } from '../registration/membershiphome/membershiphome.component';
import { IndividualFormComponent } from '../registration/individualform/individualform.component';
@NgModule({
  imports: [
    ThemeModule, UiFeaturesModule, Ng2SmartTableModule,
  ],
  declarations: [HomeComponent, StartRegistrationComponent, MembershipHomeComponent,
    IndividualFormComponent, StatusCardComponent, MyMembersComponent, MyMembersGridButtonViewMemberDetailComponent],
  providers: [HomeService, RegistrationService],
  entryComponents: [MyMembersGridButtonViewMemberDetailComponent]
})
export class HomeModule { }
