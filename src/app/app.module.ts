import { QualificationTypeDisplayComponent } from './pages/registration/qualification/qualificationTypedisplay.component';
import { RegGuard } from './services/reg.guard';
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CoreModule } from './@core/core.module';
import { NbEmailPassAuthProvider, NbAuthModule } from '@nebular/auth';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ThemeModule } from './@theme/theme.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthGuard } from './services/auth.guard';
import { webapibaseurl } from './app.model';
import {  NbLoginComponent } from './login/login.component';
import { AuthenticationService } from './services/index';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './services/token.interceptor';
@NgModule({
  declarations: [AppComponent, NbLoginComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    ThemeModule.forRoot(),
    CoreModule.forRoot(),
    NbAuthModule.forRoot({
      providers: {
        email: {
          service: NbEmailPassAuthProvider,
          config: {
            baseEndpoint: `${webapibaseurl}`,
            login: {
              endpoint: 'token',
            },
            register: {
              endpoint: 'api/account/register',
            },
            logout: {
              endpoint: '/auth/sign-out',
            },
            requestPass: {
              endpoint: '/auth/request-pass',
            },
            resetPass: {
              endpoint: '/auth/reset-pass',
            },
          },
        },
      },
    }),
  ],
  bootstrap: [AppComponent],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' }, AuthGuard, AuthenticationService, RegGuard,
     {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },

  ],
})
export class AppModule {
}
