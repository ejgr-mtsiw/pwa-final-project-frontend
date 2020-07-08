import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminKitListComponent } from './admin-kit-list/admin-kit-list.component';
import { AdminKitDetailsComponent } from './admin-kit-details/admin-kit-details.component';

const routes: Routes = [
  {
    path: '',
    component: AdminKitListComponent
  }, {
    path: ':KitId',
    component: AdminKitDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KitsRoutingModule { }
