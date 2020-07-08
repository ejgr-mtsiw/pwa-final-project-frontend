import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { FormsModule } from '@angular/forms';

import { SharedComponentesModule } from 'src/app/shared-componentes/shared-componentes.module';

import { AdminUserListComponent } from './admin-user-list/admin-user-list.component';
import { AdminUserCreateFormComponent } from './admin-user-create-form/admin-user-create-form.component';
import { AdminUserEditFormComponent } from './admin-user-edit-form/admin-user-edit-form.component';

@NgModule({
  declarations: [
    AdminUserListComponent,
    AdminUserCreateFormComponent,
    AdminUserEditFormComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    FormsModule,
    SharedComponentesModule
  ]
})
export class UsersModule { }
