import { InvoiceConsoleComponent } from './invoiceconsole/invoiceconsole.component';
import { CustomerServiceComponent } from './customerservice.component';
import { CustomerDashboardComponent } from './customerdashboard/customerdashboard.component';
import { CustomerAboutCmsComponent } from './customeraboutcms/customeraboutcms.component';

import { AuthGuard } from './../../services/auth.guard';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [{
  path: '',
  component: CustomerServiceComponent, canActivate: [AuthGuard],
  children: [
    { path: 'customerdashboard/:id', component: CustomerDashboardComponent },
    { path: 'invoiceconsole', component: InvoiceConsoleComponent },
    { path: 'aboutcms', component: CustomerAboutCmsComponent },

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
export class CustomerServiceRoutingModule {

}


