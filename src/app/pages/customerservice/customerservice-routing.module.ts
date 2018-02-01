import { InvoiceConsoleComponent } from './invoiceconsole/invoiceconsole.component';
import { CustomerServiceComponent } from './customerservice.component';
import { CustomerDashboardComponent } from './customerdashboard/customerdashboard.component';
import { CustomerAboutCmsComponent } from './customeraboutcms/customeraboutcms.component';
import { CustomerServiceCmsComponent } from './customerservicecms/customerservicecms.component';
import { CustomerContactCmsComponent } from './customercontactcms/customercontactcms.component';
import { CustomerStaffCmsComponent } from './customerstaffcms/customerstaffcms.component';


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
    { path: 'servicecms', component: CustomerServiceCmsComponent },
    { path: 'contactcms', component: CustomerContactCmsComponent },
    { path: 'staffcms', component: CustomerStaffCmsComponent },

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


