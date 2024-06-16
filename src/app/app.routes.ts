import { Routes } from '@angular/router';
import { authGuard } from './auth.guard';

export const routes: Routes = [
    {path:'', loadComponent:() => import('./components/home/home.component')},
    {path:"home", loadComponent:() => import('./components/home/home.component')},
    {path:"about",  loadComponent:() => import('./components/about/about.component'), canActivate:[authGuard]},
    {path:"login",  loadComponent:() => import('./components/login/login.component')},
    {path:'**', redirectTo:""}
];
