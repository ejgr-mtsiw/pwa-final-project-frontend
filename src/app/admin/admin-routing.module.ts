import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
    {
        path: 'users',
        loadChildren: () => import('./users/users.module')
            .then(m => m.UsersModule)
    }, {
        path: 'kits',
        loadChildren: () => import('./kits/kits.module')
            .then(m => m.KitsModule)
    }, {
        path: 'profile',
        loadChildren: () => import('./profile/profile.module')
            .then(m => m.ProfileModule)
    }, {
        path: '',
        component: DashboardComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule { }
