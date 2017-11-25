import { QualificationTypeDisplayComponent } from './registration/qualification/qualificationTypedisplay.component';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { HomeModule } from './home/home.module';

import { PagesRoutingModule } from './pages-routing.module';
import { ThemeModule } from '../@theme/theme.module';
import { PagesService } from './pages.services';
import { HttpClientModule } from '@angular/common/http';
import { TokenInterceptor } from '../services/token.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
const PAGES_COMPONENTS = [
  PagesComponent,
];

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    DashboardModule, HttpClientModule, HomeModule,
  ],
  declarations: [
    ...PAGES_COMPONENTS,
  ],
   providers: [PagesService,
   {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
    ],
})
export class PagesModule {
}
