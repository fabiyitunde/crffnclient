import { MemberDetailsComponent } from './memberdetails/memberdetails.component';

import { CustomerServiceModule } from './../pages/customerservice/customerservice.module';
import { MemberSearchComponent } from './membersearch/membersearch.component';
import { PublicComponent } from './public.component';
import { PublicRoutingModule } from './public-routing.module';
//import { IndiviualInfoComponent } from './registration/individualinfo/individualinfo.component';
import { NgModule } from '@angular/core';
import { ThemeModule } from '../@theme/theme.module';
import { HttpClientModule } from '@angular/common/http';
import { TokenInterceptor } from '../services/token.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
const PAGES_COMPONENTS = [
  PublicComponent, MemberSearchComponent,
  MemberDetailsComponent
];

@NgModule({
  imports: [

    ThemeModule, PublicRoutingModule,
    HttpClientModule, NgxPaginationModule, CustomerServiceModule
  ],
  declarations: [
    ...PAGES_COMPONENTS,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
  ],
})
export class PublicModule {
}
