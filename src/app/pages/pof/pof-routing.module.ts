import { POFHomeComponent } from './pofhome/pofhome.component';
import { POFComponent } from './pof.component';
import { POFTransConsoleComponent } from './poftransconsole/poftransconsole.component';



import { AuthGuard } from './../../services/auth.guard';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegGuard } from '../../services/reg.guard';



const routes: Routes = [{
  path: '',
  component: POFComponent, canActivate: [AuthGuard,RegGuard],
  children: [
    { path: 'pofhome', component: POFHomeComponent },
  { path: 'poftransconsole', component: POFTransConsoleComponent },

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
export class POFRoutingModule {

}


