import { MyProfileComponent } from './myprofile/myprofile.component';
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
import { PaymentGatewayComponent } from './paymentgateway/paymentgateway.component';
import { InvoiceMasterDetailComponent } from './invoicemasterdetail/invoicemasterdetail.component';
import { RegistrationComponent } from './registration.component';
import { MembershipHomeComponent } from './membershiphome/membershiphome.component';
import { ManageIndividualFormComponent } from './manageindividualform/manageindividualform.component';
import { PaymentDetailsComponent } from './paymentdetails/paymentdetails.component';
import { BasicInformationComponent } from './basicinformation/basicinformation.component';
import { CustomerStaffCmsComponent } from './membershiphome/customerstaffcms/customerstaffcms.component';
import { InvoiceListComponent } from './invoicelist/invoicelist.component';
const routes: Routes = [{
  path: '',
  component: RegistrationComponent, canActivate: [AuthGuard, RegGuard],
  children: [
    { path: 'invoices', component: InvoicesComponent },
    { path: 'customerxx', component: CustomerStaffCmsComponent },
    { path: 'payments/:id', component: PaymentsComponent },
    { path: 'processpayment/:id', component: ProcessPaymentComponent },
    { path: 'loadremitagateway/:id', component: LoadRemitaGatewayComponent },
    { path: 'remitaresponse', component: RemitaResponseComponent },
    { path: 'qualification', component: QualificationComponent },
    { path: 'documentupload/:id', component: DocumentUploadComponent },
    { path: 'documentuploadsetup', component: DocumentUploadSetupComponent },
    { path: 'viewdocument/:id', component: ViewDocumentComponent },
    { path: 'basicinformation', component: BasicInformationComponent },
    { path: 'paymentdetails/:id', component: PaymentDetailsComponent },
    { path: 'submitapplication', component: SubmitApplicationComponent },
    { path: 'paymentgateway/:id', component: PaymentGatewayComponent },
    { path: 'invoicemasterdetail', component: InvoiceMasterDetailComponent },
    { path: 'invoicelist', component: InvoiceListComponent },

  ],
}, { path: 'myprofile', component: MyProfileComponent, canActivate: [AuthGuard] },];

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


