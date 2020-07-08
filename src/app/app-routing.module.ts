import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuardService as AuthGuard } from './services/auth-guard.service';

import { LoginFormComponent } from './login-form/login-form.component';
import { LogoutComponent } from './logout/logout.component';
import { AdminKitListComponent } from './admin-kit-list/admin-kit-list.component';
import { KitDetailsComponent } from './kit-details/kit-details.component';
import { HomeComponent } from './home/home.component';
import { AdminKitDetailsComponent } from './admin-kit-details/admin-kit-details.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { AdminUserListComponent } from './admin-user-list/admin-user-list.component';

const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'login',
        component: LoginFormComponent
    },
    {
        path: 'logout',
        component: LogoutComponent
    },
    {
        path: 'kits/:KitId',
        component: KitDetailsComponent
    },
    {
        path: 'my/profile',
        component: MyProfileComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'admin/kits',
        component: AdminKitListComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'admin/kits/:KitId',
        component: AdminKitDetailsComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'admin/users',
        component: AdminUserListComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'admin',
        redirectTo: '/admin/kits',
        pathMatch: 'full'
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }
