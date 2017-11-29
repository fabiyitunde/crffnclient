import { IndiviualInfoComponent } from './individualinfo/individualinfo.component';
import { BaPictureUploaderComponent } from './myprofile/components/baPictureUploader/baPictureUploader.component';
import { MyProfileComponent } from './myprofile/myprofile.component';
import { SubmitApplicationComponent } from './submitapplication/submitapplication.component';
import { PaymentDetailsComponent } from './paymentdetails/paymentdetails.component';
import { ViewDocumentComponent } from './viewdocument/viewdocument.component';

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
import { ModalComponent } from './../ui-features/modals/modal/modal.component';
import { ManageIndividualFormComponent } from './manageindividualform/manageindividualform.component';
import { StatusCardComponent } from './status-card/status-card.component';
import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import {RegistrationService} from './registration.service';
import {RegistrationComponent} from './registration.component';
import { MembershipHomeComponent } from './membershiphome/membershiphome.component';
import { IndividualFormComponent } from './individualform/individualform.component';
import { StartRegistrationComponent } from './startregistration/startregistration.component';
import { RegistrationRoutingModule } from './registration-routing.module';
import { LoadRemitaGatewayComponent } from './loadremitagateway/loadremitagateway.component';
import { ProcessPaymentComponent } from './processpayment/processpayment.component';
import { NgUploaderModule } from 'ngx-uploader';
import { PdfViewerModule } from 'ng2-pdf-viewer';
@NgModule({
  imports: [
    ThemeModule, RegistrationRoutingModule, Ng2SmartTableModule, NgUploaderModule, PdfViewerModule,
  ],
  declarations: [RegistrationComponent, QualificationTypeDisplayComponent, UploadDocumentTypeDisplayComponent,
  MyProfileComponent, BaPictureUploaderComponent, IndiviualInfoComponent,
  UploadDocumentDetailButtonComponent, BaFileUploaderComponent, ViewDocumentComponent, ManageIndividualFormComponent
  , InvoicesComponent, PaymentsComponent, InvoiceDetailComponent, ProcessPaymentComponent, DocumentUploadComponent,
  ProcessPaymentComponent, LoadRemitaGatewayComponent , RemitaResponseComponent , RemitaTransDetailComponent,
   QualificationComponent, DocumentUploadSetupComponent, PaymentDetailsComponent, SubmitApplicationComponent ],
  providers: [RegistrationService, QualificationService, DocumentUploadSetupService],
  entryComponents: [QualificationTypeDisplayComponent,
   UploadDocumentTypeDisplayComponent, UploadDocumentDetailButtonComponent],
   exports: [IndiviualInfoComponent],
})
export class RegistrationModule { }
