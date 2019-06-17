//import { IndiviualInfoComponent } from './registration/individualinfo/individualinfo.component';
import { QualificationTypeDisplayComponent } from './registration/qualification/qualificationTypedisplay.component';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { PagesRoutingModule } from './pages-routing.module';
import { ThemeModule } from '../@theme/theme.module';
import { PagesService } from './pages.services';
import { HttpClientModule } from '@angular/common/http';
import { TokenInterceptor } from '../services/token.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HomeModule } from './home/home.module';
import { ErrorpageComponent } from './errorpage/errorpage.component';

const PAGES_COMPONENTS = [
  PagesComponent,
];

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule, HomeModule,
    DashboardModule, HttpClientModule,
  ],
  declarations: [
    ...PAGES_COMPONENTS,
    ErrorpageComponent,

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
