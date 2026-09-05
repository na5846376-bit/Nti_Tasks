import { Routes } from '@angular/router';

import { Login } from './login/login';

import { Contactus } from './contactus/contactus';

export const routes: Routes = [
    {path : 'login', component:Login} ,
    {path:'contactus', component:Contactus},
    {path: '' ,redirectTo: 'login' ,pathMatch: 'full'}
    
];
