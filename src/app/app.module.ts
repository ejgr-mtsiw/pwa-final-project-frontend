import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KitsListComponent } from './kits-list/kits-list.component';
import { MainMenuComponent } from './main-menu/main-menu.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AdminKitListComponent } from './admin-kit-list/admin-kit-list.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { LogoutComponent } from './logout/logout.component';
import { AdminKitEditFormComponent } from './admin-kit-edit-form/admin-kit-edit-form.component';
import { AdminKitCreateFormComponent } from './admin-kit-create-form/admin-kit-create-form.component';
import { ModalContentComponent } from './modal-content/modal-content.component';
import { MessageDisplayComponent } from './message-display/message-display.component';
import { KitDetailsComponent } from './kit-details/kit-details.component';
import { MainMenuKitListComponent } from './main-menu-kit-list/main-menu-kit-list.component';
import { HomeComponent } from './home/home.component';
import { KitReadingsComponent } from './kit-readings/kit-readings.component';
import { FooterComponent } from './footer/footer.component';
import { AdminKitDetailsComponent } from './admin-kit-details/admin-kit-details.component';
import { AdminKitEventsComponent } from './admin-kit-events/admin-kit-events.component';
import { AdminKitEventsCreateFormComponent } from './admin-kit-events-create-form/admin-kit-events-create-form.component';
import { AdminKitReadingsComponent } from './admin-kit-readings/admin-kit-readings.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { MyProfileGravatarComponent } from './my-profile-gravatar/my-profile-gravatar.component';
import { AdminUserListComponent } from './admin-user-list/admin-user-list.component';
import { AdminUserCreateFormComponent } from './admin-user-create-form/admin-user-create-form.component';
import { AdminUserEditFormComponent } from './admin-user-edit-form/admin-user-edit-form.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';

@NgModule({
    declarations: [
        AppComponent,
        KitsListComponent,
        MainMenuComponent,
        AdminKitListComponent,
        LoginFormComponent,
        LogoutComponent,
        AdminKitEditFormComponent,
        AdminKitCreateFormComponent,
        ModalContentComponent,
        MessageDisplayComponent,
        KitDetailsComponent,
        MainMenuKitListComponent,
        HomeComponent,
        KitReadingsComponent,
        FooterComponent,
        AdminKitDetailsComponent,
        AdminKitEventsComponent,
        AdminKitEventsCreateFormComponent,
        AdminKitReadingsComponent,
        MyProfileComponent,
        MyProfileGravatarComponent,
        AdminUserListComponent,
        AdminUserCreateFormComponent,
        AdminUserEditFormComponent,
        AdminDashboardComponent
    ],
    imports: [
        BrowserModule,
        NgbModule,
        HttpClientModule,
        FormsModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [
        AppComponent
    ],
})
export class AppModule { }
