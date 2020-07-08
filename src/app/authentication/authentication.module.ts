import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { SharedComponentesModule } from '../shared-componentes/shared-componentes.module';

import { LoginFormComponent } from './login-form/login-form.component';
import { LogoutComponent } from './logout/logout.component';


@NgModule({
    declarations: [
        LoginFormComponent,
        LogoutComponent
    ],
    imports: [
        CommonModule,
        AuthenticationRoutingModule,
        FormsModule,
        SharedComponentesModule
    ],
    exports: [
        LoginFormComponent,
        LogoutComponent
    ]
})
export class AuthenticationModule { }
