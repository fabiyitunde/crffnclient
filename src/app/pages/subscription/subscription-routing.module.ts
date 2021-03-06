import { SubscriptionComponent } from './subscription.component';

import { AuthGuard } from './../../services/auth.guard';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubscriptionHomeComponent } from './subscriptionhome/subscriptionhome.component';
import { SubscriptionConsoleComponent } from './subscriptionconsole/subscriptionconsole.component';
import { RegGuard } from '../../services/reg.guard';



const routes: Routes = [{
  path: '',
  component: SubscriptionComponent, canActivate: [AuthGuard,RegGuard],
  children: [
    { path: 'subscriptionhome', component: SubscriptionHomeComponent },
  { path: 'subscriptionconsole', component: SubscriptionConsoleComponent },

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
export class SubscriptionRoutingModule {

}


