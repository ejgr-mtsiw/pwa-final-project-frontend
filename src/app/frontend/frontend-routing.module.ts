import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KitDetailsComponent } from './kit-details/kit-details.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'kits/:KitId',
        component: KitDetailsComponent
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    }

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FrontendRoutingModule { }
