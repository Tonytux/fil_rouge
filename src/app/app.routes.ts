import { Routes } from '@angular/router';

export const routes: Routes = [
    {path:"about",  loadComponent:() => import('./components/about/about.component')},
    {path:"users",  loadComponent:() => import('./components/user/user.component')},
    {path:'**', redirectTo:""},
    {path:'', loadComponent:() => import('./components/home/home.component')},
    {path:"home", loadComponent:() => import('./components/home/home.component')}
];
