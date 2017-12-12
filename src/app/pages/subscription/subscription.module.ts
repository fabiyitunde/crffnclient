import { SubscriptionComponent } from './subscription.component';
import { SubscriptionHomeGridButtonViewDetailComponent } from './subscriptionhome/subscriptionhome-gridbutton-viewdetail';
import { SubscriptionHomeComponent } from './subscriptionhome/subscriptionhome.component';
import { SubscriptionDetailsComponent } from './subscriptiondetails/subscriptiondetails.component';
import { SubscriptionConsoleComponent } from './subscriptionconsole/subscriptionconsole.component';
import { SubscriptionRoutingModule } from './subscription-routing.module';


import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NgModule } from '@angular/core';
import { ThemeModule } from '../../@theme/theme.module';
import { NgUploaderModule } from 'ngx-uploader';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { NewSubscriptionComponent } from './newsubscription/newsubscription.component';
@NgModule({
  imports: [
    ThemeModule,  Ng2SmartTableModule, NgUploaderModule, PdfViewerModule, SubscriptionRoutingModule,

  ],
  declarations: [SubscriptionComponent, NewSubscriptionComponent, SubscriptionConsoleComponent, SubscriptionDetailsComponent,
     SubscriptionHomeComponent, SubscriptionHomeGridButtonViewDetailComponent
 ],
  providers: [],
  entryComponents: [SubscriptionHomeGridButtonViewDetailComponent],
})
export class SubscriptionModule { }
