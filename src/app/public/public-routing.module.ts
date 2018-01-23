import { MemberDetailsComponent } from './memberdetails/memberdetails.component';

import { MemberSearchComponent } from './membersearch/membersearch.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { PublicComponent } from './public.component';

const routes: Routes = [{
  path: '',
  component: PublicComponent,
  children: [
    {
      path: 'membersearch',
      component: MemberSearchComponent,
    },


    {
      path: 'memberdetails/:id',
      component: MemberDetailsComponent,
    }
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublicRoutingModule {
}
