import { UserMemberMappingComponent } from './user-member-mapping/user-member-mapping.component';
import { RoleManagementGridCellDisplayDropdownTextComponent } from './rolemanagement/rolemanagement.gridcelldisplay.dropdowntext';
import { RoleManagementComponent } from './rolemanagement/rolemanagement.component';
import { AdministratorComponent } from './administrator.component';
import { AdministratorRoutingModule } from './administrator-routing.module';
import { SystemUserManagementComponent } from './systemusermanagement/systemusermanagement.component';
import { SystemUsersGridButtonViewDetailComponent } from './systemusers/systemusers-gridbutton-viewdetails';
import { SystemUsersComponent } from './systemusers/systemusers.component';

import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NgModule } from '@angular/core';
import { ThemeModule } from '../../@theme/theme.module';
import { NgUploaderModule } from 'ngx-uploader';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { MultiselectDropdownModule } from 'angular-2-dropdown-multiselect';

@NgModule({
  imports: [
    ThemeModule,  Ng2SmartTableModule, NgUploaderModule, PdfViewerModule, AdministratorRoutingModule,
    MultiselectDropdownModule,
  ],
  declarations: [SystemUsersComponent, SystemUsersGridButtonViewDetailComponent, SystemUserManagementComponent,
  AdministratorComponent, RoleManagementComponent, RoleManagementGridCellDisplayDropdownTextComponent, UserMemberMappingComponent],
  providers: [],
  entryComponents: [SystemUsersGridButtonViewDetailComponent, RoleManagementGridCellDisplayDropdownTextComponent],
})
export class AdministratorModule { }
