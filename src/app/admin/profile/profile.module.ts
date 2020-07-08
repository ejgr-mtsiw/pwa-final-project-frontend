import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { FormsModule } from '@angular/forms';

import { SharedComponentesModule } from 'src/app/shared-componentes/shared-componentes.module';

import { MyProfileComponent } from './my-profile/my-profile.component';
import { MyProfileGravatarComponent } from './my-profile-gravatar/my-profile-gravatar.component';

@NgModule({
    declarations: [
        MyProfileComponent,
        MyProfileGravatarComponent
    ],
    imports: [
        CommonModule,
        ProfileRoutingModule,
        FormsModule,
        SharedComponentesModule
    ]
})
export class ProfileModule { }
