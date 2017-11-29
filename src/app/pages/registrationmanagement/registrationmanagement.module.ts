import { PendingCertificationComponent } from './pendingcertification/pendingcertification.component';
import { PendingCertificationGridButtonViewDetailComponent } from './pendingcertification/pendingcertification-gridbutton-viewdetail';
import { CertificationConsoleComponent } from './certificationconsole/certificationconsole.component';
import { PendingVerificationViewDetailButtonComponent } from './pendingverification/pendingverification.viewdetail.button';

import { RegistrationModule } from './../registration/registration.module';
import { VerificationConsoleComponent } from './verificationconsole/verificationconsole.component';
import { PendingVerificationComponent } from './pendingverification/pendingverification.component';
import { RegistrationManagementRoutingModule } from './registrationmanagement-routing.module';
import { RegistrationManagementComponent } from './registrationmanagement.component';

import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NgModule } from '@angular/core';
import { ThemeModule } from '../../@theme/theme.module';
import { NgUploaderModule } from 'ngx-uploader';
import { PdfViewerModule } from 'ng2-pdf-viewer';
@NgModule({
  imports: [
    ThemeModule,  Ng2SmartTableModule, NgUploaderModule, PdfViewerModule, RegistrationManagementRoutingModule,
RegistrationModule,

  ],
  declarations: [ RegistrationManagementComponent, PendingVerificationComponent,
   VerificationConsoleComponent, PendingVerificationViewDetailButtonComponent, CertificationConsoleComponent,
   PendingCertificationGridButtonViewDetailComponent, PendingCertificationComponent],
  providers: [],
  entryComponents: [PendingVerificationViewDetailButtonComponent, PendingCertificationGridButtonViewDetailComponent],
})
export class RegistrationManagementModule { }
