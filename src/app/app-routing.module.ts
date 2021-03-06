import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuardService as AuthGuard } from './services/auth-guard.service';

const routes: Routes = [

    {
        path: 'admin',
        canActivate: [AuthGuard],
        loadChildren: () => import('./admin/admin.module')
            .then(m => m.AdminModule)
    }, {
        path: 'auth',
        loadChildren: () => import('./authentication/authentication.module')
            .then(m => m.AuthenticationModule)
    }, {
        path: '',
        loadChildren: () => import('./frontend/frontend.module')
            .then(m => m.FrontendModule)
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }
