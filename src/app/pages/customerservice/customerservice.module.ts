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
import { CustomerLocationComponent } from './customerlocation/customerlocation.component';
import { CustomerQuotationComponent } from './customerquotation/customerquotation.component';
import { CustomerServicesComponent } from './customerservices/customerservices.component';
import { CustomerStaffComponent } from './customerstaff/customerstaff.component';



import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NgModule } from '@angular/core';
import { ThemeModule } from '../../@theme/theme.module';
import { NgUploaderModule } from 'ngx-uploader';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { PaymentListComponent } from './invoiceconsole/paymentlist/paymentlist.component';
@NgModule({
  imports: [
    ThemeModule, Ng2SmartTableModule, NgUploaderModule, PdfViewerModule, CustomerServiceRoutingModule,

  ],
  declarations: [CustomerDashboardComponent, CustomerAboutComponent, CustomerLocationComponent, CustomerInfoComponent, CustomerServiceComponent, CustomerStaffComponent, CustomerInvoiceListComponent,
    CustomerInvoiceListGridButtonViewDetailComponent, CustomerServicesComponent, CreateInvoiceHeaderComponent, CustomerInvoiceEditComponent,
    InvoiceLineItemTypeDisplayComponent, InvoiceConsoleComponent, CustomerQuotationComponent, PaymentListComponent],
  providers: [],
  exports: [CustomerInfoComponent, CustomerAboutComponent, CustomerLocationComponent, CustomerServicesComponent, CustomerStaffComponent, CustomerQuotationComponent],
  entryComponents: [CustomerInvoiceListGridButtonViewDetailComponent, InvoiceLineItemTypeDisplayComponent],
})
export class CustomerServiceModule { }
