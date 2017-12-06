import { POFService } from './pof.service';
import { NewPOFTransactionComponent } from './newpoftransaction/newpoftransaction.component';
import { NewPOFTransactionDetailComponent } from './newpoftransactiondetail/newpoftransactiondetail.component';
import { POFHomeGridButtonViewDetailComponent } from './pofhome/pofhome.gridbutton.viewdetail';
import { POFHomeComponent } from './pofhome/pofhome.component';
import { POFTransactionEditComponent } from './poftransactionedit/poftransactionedit.component';
import { POFTransConsoleComponent } from './poftransconsole/poftransconsole.component';
import { POFComponent } from './pof.component';
import { POFRoutingModule } from './pof-routing.module';



import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NgModule } from '@angular/core';
import { ThemeModule } from '../../@theme/theme.module';
import { NgUploaderModule } from 'ngx-uploader';
import { PdfViewerModule } from 'ng2-pdf-viewer';
@NgModule({
  imports: [
    ThemeModule,  Ng2SmartTableModule, NgUploaderModule, PdfViewerModule, POFRoutingModule,

  ],
  declarations: [POFComponent, POFTransConsoleComponent, POFTransactionEditComponent, POFHomeComponent,
   POFHomeGridButtonViewDetailComponent, NewPOFTransactionDetailComponent, NewPOFTransactionComponent ],
  providers: [POFService],
  entryComponents: [POFHomeGridButtonViewDetailComponent, NewPOFTransactionDetailComponent],
})
export class POFModule { }
