import { PendingCertificationComponent } from './pendingcertification/pendingcertification.component';
import { CertificationConsoleComponent } from './certificationconsole/certificationconsole.component';
import { VerificationConsoleComponent } from './verificationconsole/verificationconsole.component';
import { PendingVerificationComponent } from './pendingverification/pendingverification.component';
import { RegistrationManagementComponent } from './registrationmanagement.component';
import { AuthGuard } from './../../services/auth.guard';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [{
  path: '',
  component: RegistrationManagementComponent, canActivate: [AuthGuard],
  children: [
    { path: 'pendingverifications', component: PendingVerificationComponent },
    { path: 'verificationconsole/:id', component: VerificationConsoleComponent },
     { path: 'certificationconsole/:id', component: CertificationConsoleComponent },
       { path: 'pendingcertifications', component: PendingCertificationComponent },
  ],
}];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class RegistrationManagementRoutingModule {

}


