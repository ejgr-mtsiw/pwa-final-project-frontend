import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

import { KitsRoutingModule } from './kits-routing.module';

import { AdminKitListComponent } from './admin-kit-list/admin-kit-list.component';
import { AdminKitCreateFormComponent } from './admin-kit-create-form/admin-kit-create-form.component';
import { AdminKitEditFormComponent } from './admin-kit-edit-form/admin-kit-edit-form.component';
import { AdminKitDetailsComponent } from './admin-kit-details/admin-kit-details.component';
import { AdminKitReadingsComponent } from './admin-kit-readings/admin-kit-readings.component';
import { AdminKitEventsComponent } from './admin-kit-events/admin-kit-events.component';
import { AdminKitEventsCreateFormComponent } from './admin-kit-events-create-form/admin-kit-events-create-form.component';
import { SharedComponentesModule } from 'src/app/shared-componentes/shared-componentes.module';

@NgModule({
  declarations: [
    AdminKitListComponent,
    AdminKitCreateFormComponent,
    AdminKitEditFormComponent,
    AdminKitDetailsComponent,
    AdminKitReadingsComponent,
    AdminKitEventsComponent,
    AdminKitEventsCreateFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    KitsRoutingModule,
    SharedComponentesModule
  ]
})
export class KitsModule { }
