import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'home',
      component: HomeComponent,
    },
    {
      path: 'dashboard',
      component: DashboardComponent,
    },
    {
      path: '404',
      component: ErrorpageComponent,
    }, {
      path: 'registration',
      loadChildren: './registration/registration.module#RegistrationModule',
    }, {
      path: 'customerservice',
      loadChildren: './customerservice/customerservice.module#CustomerServiceModule',
    }, {
      path: 'administrator',
      loadChildren: './administrator/administrator.module#AdministratorModule',
    }
    , {
      path: 'registrationmanagement',
      loadChildren: './registrationmanagement/registrationmanagement.module#RegistrationManagementModule',
    }
    , {
      path: 'pof',
      loadChildren: './pof/pof.module#POFModule',
    }
    , {
      path: 'subscription',
      loadChildren: './subscription/subscription.module#SubscriptionModule',
    }, {
      path: 'components',
      loadChildren: './components/components.module#ComponentsModule',
    }, {
      path: 'maps',
      loadChildren: './maps/maps.module#MapsModule',
    }, {
      path: 'charts',
      loadChildren: './charts/charts.module#ChartsModule',
    }, {
      path: 'editors',
      loadChildren: './editors/editors.module#EditorsModule',
    }, {
      path: 'forms',
      loadChildren: './forms/forms.module#FormsModule',
    }, {
      path: 'tables',
      loadChildren: './tables/tables.module#TablesModule',
    },
    {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full',
    }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
