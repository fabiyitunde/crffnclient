import { SystemUserManagementComponent } from './systemusermanagement/systemusermanagement.component';
import { SystemUsersComponent } from './systemusers/systemusers.component';
import { AdministratorComponent } from './administrator.component';
import { RegisterInternalUserComponent } from './registerinternaluser/registerinternaluser.component';
import { AuthGuard } from './../../services/auth.guard';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [{ path: 'register-user', component: RegisterInternalUserComponent }, {
  path: '',
  component: AdministratorComponent, canActivate: [AuthGuard],
  children: [
    { path: 'systemusers', component: SystemUsersComponent },
    { path: 'register-user', component: RegisterInternalUserComponent },
    { path: 'systemusermanagement/:id', component: SystemUserManagementComponent },
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
export class AdministratorRoutingModule {

}


