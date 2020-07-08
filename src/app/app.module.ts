import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SharedComponentesModule } from 'src/app/shared-componentes/shared-componentes.module';
import { AdminRoutingModule } from './admin/admin-routing.module';
import { FrontendRoutingModule } from './frontend/frontend-routing.module';
import { AuthenticationRoutingModule } from './authentication/authentication-routing.module';


@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        NgbModule,
        HttpClientModule,
        SharedComponentesModule,
        AppRoutingModule,
        FrontendRoutingModule,
        AuthenticationRoutingModule,
        AdminRoutingModule
    ],
    providers: [],
    bootstrap: [
        AppComponent
    ],
})
export class AppModule { }
