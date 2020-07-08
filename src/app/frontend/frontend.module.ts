import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrontendRoutingModule } from './frontend-routing.module';
import { KitDetailsComponent } from './kit-details/kit-details.component';
import { KitReadingsComponent } from './kit-readings/kit-readings.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    KitDetailsComponent,
    KitReadingsComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    FrontendRoutingModule
  ]
})
export class FrontendModule { }
