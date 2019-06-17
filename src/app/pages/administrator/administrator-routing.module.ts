import { SystemUserManagementComponent } from "./systemusermanagement/systemusermanagement.component";
import { SystemUsersComponent } from "./systemusers/systemusers.component";
import { AdministratorComponent } from "./administrator.component";
import { RegisterInternalUserComponent } from "./registerinternaluser/registerinternaluser.component";
import { AuthGuard } from "./../../services/auth.guard";
import { ApproveinternalinvoiceComponent } from "./approveinternalinvoice/approveinternalinvoice.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { RoleGuard } from "../../services/role-guard.service";
import { InvoicemasterdetailComponent } from "./invoicemasterdetail/invoicemasterdetail.component";

const routes: Routes = [
  // { path: "register-user", component: RegisterInternalUserComponent },
  {
    path: "",
    component: AdministratorComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: "systemusers",
        component: SystemUsersComponent,
        canActivate: [RoleGuard],
        data: { role: "Administrator" }
      },
      {
        path: "register-user",
        component: RegisterInternalUserComponent,
        canActivate: [RoleGuard],
        data: { role: "Administrator" }
      },
      {
        path: "systemusermanagement/:id",
        component: SystemUserManagementComponent,
        canActivate: [RoleGuard],
        data: { role: "Administrator" }
      },
      {
        path: "approveinvoice",
        component: ApproveinternalinvoiceComponent,
        canActivate: [RoleGuard],
        data: { role: "Certification" }
      },
      {
        path: "invoicedetail/:id",
        component: InvoicemasterdetailComponent,
        canActivate: [RoleGuard],
        data: { role: "Certification" }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministratorRoutingModule {}
