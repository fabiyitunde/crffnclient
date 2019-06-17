import { InvoiceConsoleComponent } from './invoiceconsole/invoiceconsole.component';
import { InvoiceLineItemTypeDisplayComponent } from './invoiceconsole/customerinvoiceedit/invoicelineitemtypedisplay.component';
import { CustomerInvoiceEditComponent } from './invoiceconsole/customerinvoiceedit/customerinvoiceedit.component';
import { CreateInvoiceHeaderComponent } from './invoiceconsole/createinvoiceheader/createinvoiceheader.component';
import { CustomerInvoiceListGridButtonViewDetailComponent } from './customerinvoicelist/customerinvoicelist-gridbutton-viewdetail';
import { CustomerInvoiceListComponent } from './customerinvoicelist/customerinvoicelist.component';
import { CustomerServiceComponent } from './customerservice.component';
import { CustomerDashboardComponent } from './customerdashboard/customerdashboard.component';
import { CustomerServiceRoutingModule } from './customerservice-routing.module';
import { CustomerInfoComponent } from './customerinfo/customerinfo.component';
import { CustomerAboutComponent } from './customerabout/customerabout.component';
import { CustomerAboutCmsComponent } from './customeraboutcms/customeraboutcms.component';
import { CustomerServiceCmsComponent } from './customerservicecms/customerservicecms.component';
import { CustomerContactCmsComponent } from './customercontactcms/customercontactcms.component';
import { CustomerStaffCmsComponent } from './customerstaffcms/customerstaffcms.component';


import { CustomerLocationComponent } from './customerlocation/customerlocation.component';
import { CustomerQuotationComponent } from './customerquotation/customerquotation.component';
import { QuotationComponent } from './quotation/quotation.component';
import { CustomerServicesComponent } from './customerservices/customerservices.component';
import { CustomerStaffComponent } from './customerstaff/customerstaff.component';


import { BaPictureUploaderComponent } from './customerstaffcms/components/baPictureUploader/baPictureUploader.component';

import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NgModule } from '@angular/core';

import { NgUploaderModule } from 'ngx-uploader';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { PaymentListComponent } from './invoiceconsole/paymentlist/paymentlist.component';
import { CKEditorModule } from 'ng2-ckeditor';
import { ModalsComponent } from './customerstaffcms/modals/modals.component';
import { ModalComponent } from './customerstaffcms/modals/modal/modal.component';
import { ThemeModule } from '../../@theme/theme.module';
import { TextComponent } from './customeraboutcms/text/text.component';
import { ImageComponent } from './customeraboutcms/image/image.component';
import { ViewtextComponent } from './customeraboutcms/viewtext/viewtext.component';
import { ViewimagesComponent } from './customeraboutcms/viewimages/viewimages.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { QuotationdetailComponent } from './quotationdetail/quotationdetail.component';
import { QuotationLandingPageComponent } from './quotation-landing-page/quotation-landing-page.component';
import { QuotationDetailViewComponent } from './quotation-detail-view/quotation-detail-view.component';

import { QuotationListComponent } from './quotationlist/quotationlist.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { QuotationReplyComponent } from './quotation-reply/quotation-reply.component';

const components = [

  ModalsComponent,

  ModalComponent,

];


@NgModule({
  imports: [
    ThemeModule, CKEditorModule, Ng2SmartTableModule, NgUploaderModule,
    PdfViewerModule, CustomerServiceRoutingModule, NgxPaginationModule

  ],
  declarations: [CustomerDashboardComponent, QuotationComponent, CustomerAboutComponent, CustomerAboutCmsComponent,
    CustomerServiceCmsComponent, CustomerLocationComponent, CustomerInfoComponent, CustomerServiceComponent, CustomerStaffComponent, CustomerInvoiceListComponent,
    CustomerInvoiceListGridButtonViewDetailComponent, CustomerServicesComponent, CreateInvoiceHeaderComponent, CustomerInvoiceEditComponent, ModalsComponent, ModalComponent,
    InvoiceLineItemTypeDisplayComponent, CustomerContactCmsComponent, CustomerStaffCmsComponent,
    InvoiceConsoleComponent, CustomerQuotationComponent, PaymentListComponent, BaPictureUploaderComponent, TextComponent, ImageComponent, ViewtextComponent, ViewimagesComponent, QuotationdetailComponent,
    QuotationLandingPageComponent, QuotationDetailViewComponent, QuotationListComponent, SpinnerComponent, QuotationReplyComponent],
  providers: [],
  exports: [CustomerInfoComponent, CustomerAboutComponent, CustomerAboutCmsComponent,
    CustomerLocationComponent, CustomerServicesComponent, CustomerStaffComponent,
    CustomerQuotationComponent, CustomerStaffCmsComponent],
  entryComponents: [CustomerInvoiceListGridButtonViewDetailComponent, ModalComponent, InvoiceLineItemTypeDisplayComponent],
})
export class CustomerServiceModule { }
