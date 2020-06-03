import { PagesComponent } from './pages.component';
import { Routes,RouterModule } from '@angular/router';
import { UsuarioComponent } from './usuario/usuario.component';
import { PoliciaComponent } from './policia/policia.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const pagesRoutes:Routes=[
    {path:'',component:PagesComponent,
children:[
    {path:'usuario',component:UsuarioComponent,data:{titulo:"Usuarios"}},
    {path:'policia',component:PoliciaComponent,data:{titulo:"Policias"}},
    {path:'dashboard',component:DashboardComponent,data:{titulo:"Dashboard"}},

]}
];

export const PAGES_ROUTES=RouterModule.forChild(pagesRoutes);