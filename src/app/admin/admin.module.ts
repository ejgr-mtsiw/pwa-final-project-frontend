import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersRoutingModule } from './users/users-routing.module';
import { KitsRoutingModule } from './kits/kits-routing.module';
import { ProfileRoutingModule } from './profile/profile-routing.module';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    KitsRoutingModule,
    UsersRoutingModule,
    ProfileRoutingModule
  ]
})
export class AdminModule { }
