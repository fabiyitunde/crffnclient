import { CorporateFormDetailComponent } from './corporateformdetail/corporateformdetail.component';
import { CorporateFormComponent } from './corporateform/corporateform.component';
import { IndiviualInfoComponent } from './individualinfo/individualinfo.component';
import { BaPictureUploaderComponent } from './myprofile/components/baPictureUploader/baPictureUploader.component';
import { MyProfileComponent } from './myprofile/myprofile.component';
import { SubmitApplicationComponent } from './submitapplication/submitapplication.component';
import { PaymentDetailsComponent } from './paymentdetails/paymentdetails.component';
import { ViewDocumentComponent } from './viewdocument/viewdocument.component';
import { PaymentGatewayComponent } from './paymentgateway/paymentgateway.component'
import { BaFileUploaderComponent } from './documentupload/components/baFileUploader/baFileUploader.component';
import { DocumentUploadSetupService } from './documentuploadsetup/documentuploadsetup.service';
import { QualificationService } from './qualification/qualification.service';
import { UploadDocumentDetailButtonComponent } from './documentuploadsetup/uploaddocumentdetail-button.component';
import { UploadDocumentTypeDisplayComponent } from './documentuploadsetup/uploaddocumentTypeDisplay.component';
import { DocumentUploadSetupComponent } from './documentuploadsetup/documentuploadsetup.component';

import { DocumentUploadComponent } from './documentupload/documentupload.component';
import { QualificationTypeDisplayComponent } from './qualification/qualificationTypedisplay.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { QualificationComponent } from './qualification/qualification.component';
import { RemitaTransDetailComponent } from './remitatransdetail/remitatransdetail.component';
import { RemitaResponseComponent } from './remitaresponse/remitaresponse.component';
import { InvoiceDetailComponent } from './invoicedetail/invoicedetail.component';
import { PaymentsComponent } from './payments/payments.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { InvoiceListComponent } from './invoicelist/invoicelist.component';
import { InvoiceMasterDetailComponent } from './invoicemasterdetail/invoicemasterdetail.component';
import { ManageIndividualFormComponent } from './manageindividualform/manageindividualform.component';
import { StatusCardComponent } from './status-card/status-card.component';
import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { RegistrationService } from './registration.service';
import { RegistrationComponent } from './registration.component';
import { MembershipHomeComponent } from './membershiphome/membershiphome.component';
import { IndividualFormComponent } from './individualform/individualform.component';
import { StartRegistrationComponent } from './startregistration/startregistration.component';
import { RegistrationRoutingModule } from './registration-routing.module';
import { LoadRemitaGatewayComponent } from './loadremitagateway/loadremitagateway.component';
import { ProcessPaymentComponent } from './processpayment/processpayment.component';
import { NgUploaderModule } from 'ngx-uploader';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { BasicInformationComponent } from './basicinformation/basicinformation.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { SpinnerComponent } from './spinner/spinner.component';



@NgModule({
  imports: [
    ThemeModule, RegistrationRoutingModule, Ng2SmartTableModule, NgUploaderModule, PdfViewerModule, NgxPaginationModule
  ],
  declarations: [RegistrationComponent, InvoiceMasterDetailComponent, PaymentGatewayComponent, QualificationTypeDisplayComponent, UploadDocumentTypeDisplayComponent,
    MyProfileComponent, InvoiceListComponent, BaPictureUploaderComponent, IndiviualInfoComponent,
    UploadDocumentDetailButtonComponent, BaFileUploaderComponent, ViewDocumentComponent, ManageIndividualFormComponent
    , InvoicesComponent, PaymentsComponent, InvoiceDetailComponent, ProcessPaymentComponent, DocumentUploadComponent,
    ProcessPaymentComponent, LoadRemitaGatewayComponent, RemitaResponseComponent, RemitaTransDetailComponent,
    QualificationComponent, DocumentUploadSetupComponent, PaymentGatewayComponent, PaymentDetailsComponent, SubmitApplicationComponent,
    StartRegistrationComponent, MembershipHomeComponent, StatusCardComponent, IndividualFormComponent,
    BasicInformationComponent, CorporateFormComponent, CorporateFormDetailComponent, SpinnerComponent],
  providers: [RegistrationService, QualificationService],
  entryComponents: [QualificationTypeDisplayComponent,
    UploadDocumentTypeDisplayComponent, UploadDocumentDetailButtonComponent],
  exports: [IndiviualInfoComponent, StartRegistrationComponent, MembershipHomeComponent
    , StatusCardComponent, CorporateFormDetailComponent],
})
export class RegistrationModule { }
