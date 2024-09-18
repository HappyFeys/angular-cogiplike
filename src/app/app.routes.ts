import { Routes } from '@angular/router';
import { HomePageComponent } from './Home/page/home-page/home-page.component';
import { DetailsPageComponent } from './Details/page/details-page/details-page.component';

export const routes: Routes = [
    {
        path:'', component: HomePageComponent, pathMatch: 'full'
    },
    {
        path: 'client/:id', component: DetailsPageComponent
    },


    {
        path: '**', redirectTo: ''
    }
];
