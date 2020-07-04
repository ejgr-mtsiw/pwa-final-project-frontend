import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuardService as AuthGuard } from './services/auth-guard.service';

import { LoginFormComponent } from './login-form/login-form.component';
import { LogoutComponent } from './logout/logout.component';
import { KitsListComponent } from './kits-list/kits-list.component';
import { AdminKitListComponent } from './admin-kit-list/admin-kit-list.component';

const routes: Routes = [
    { path: '', component: KitsListComponent },
    { path: 'login', component: LoginFormComponent },
    { path: 'logout', component: LogoutComponent },
    { path: 'kits', component: KitsListComponent },
    {
        path: 'admin/kits',
        component: AdminKitListComponent,
        canActivate: [AuthGuard]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }
