import { SubmitApplicationComponent } from './submitapplication/submitapplication.component';
import { ViewDocumentComponent } from './viewdocument/viewdocument.component';
import { DocumentUploadSetupComponent } from './documentuploadsetup/documentuploadsetup.component';
import { DocumentUploadComponent } from './documentupload/documentupload.component';
import { QualificationComponent } from './qualification/qualification.component';
import { RegGuard } from './../../services/reg.guard';
import { AuthGuard } from './../../services/auth.guard';
import { RemitaResponseComponent } from './remitaresponse/remitaresponse.component';
import { LoadRemitaGatewayComponent } from './loadremitagateway/loadremitagateway.component';
import { ProcessPaymentComponent } from './processpayment/processpayment.component';
import { PaymentsComponent } from './payments/payments.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrationComponent } from './registration.component';
import { MembershipHomeComponent } from './membershiphome/membershiphome.component';
import { ManageIndividualFormComponent } from './manageindividualform/manageindividualform.component';
import { PaymentDetailsComponent } from './paymentdetails/paymentdetails.component';

const routes: Routes = [{
  path: '',
  component: RegistrationComponent, canActivate: [AuthGuard, RegGuard],
  children: [
    { path: 'invoices', component: InvoicesComponent },
    { path: 'payments/:id', component: PaymentsComponent },
    { path: 'processpayment/:id', component: ProcessPaymentComponent },
    { path: 'loadremitagateway/:id', component: LoadRemitaGatewayComponent },
      { path: 'remitaresponse', component: RemitaResponseComponent },
        { path: 'qualification', component: QualificationComponent },
           { path: 'documentupload/:id', component: DocumentUploadComponent },
     { path: 'documentuploadsetup', component: DocumentUploadSetupComponent },
      { path: 'viewdocument/:id', component: ViewDocumentComponent },
       { path: 'basicinformation', component: ManageIndividualFormComponent },
        { path: 'paymentdetails/:id', component: PaymentDetailsComponent },
        { path: 'submitapplication', component: SubmitApplicationComponent },

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
export class RegistrationRoutingModule {

}

