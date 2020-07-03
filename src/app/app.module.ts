import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KitsListComponent } from './kits-list/kits-list.component';
import { MainMenuComponent } from './main-menu/main-menu.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AdminKitListComponent } from './admin-kit-list/admin-kit-list.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
    declarations: [
        AppComponent,
        KitsListComponent,
        MainMenuComponent,
        AdminKitListComponent,
        LoginComponent,
        LogoutComponent
    ],
    imports: [
        BrowserModule,
        NgbModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [
        AppComponent
    ],
})
export class AppModule { }
