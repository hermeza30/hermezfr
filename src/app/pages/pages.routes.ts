import { PagesComponent } from './pages.component';
import { Routes,RouterModule } from '@angular/router';
import { UsuarioComponent } from './usuario/usuario.component';
import { PoliciaComponent } from './policia/policia.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginguardGuard } from '../services/service.index';
import { ModificarPoliciaComponent } from './policia/modificar-policia.component';
import { VerPoliciaComponent } from './policia/ver-policia.component';
import { AdminGuard } from '../services/service.index';
import { PedidosComponent } from './pedidos/pedidos.component';
import { BuscarPedidosComponent } from './pedidos/buscar-pedidos.component';
import { DetallePedidoComponent } from './detalle-pedido/detalle-pedido.component';

const pagesRoutes:Routes=[
    {path:'',component:PagesComponent,canActivate:[LoginguardGuard],
children:[
    {path:'usuario',component:UsuarioComponent,canActivate:[AdminGuard],data:{titulo:"Usuarios"}},
    {path:'policia',component:PoliciaComponent,data:{titulo:"Registrar Policía"}},
    {path:'pedido',component:PedidosComponent,data:{titulo:"Pedidos"}},
    {path:'buscar-pedido',component:BuscarPedidosComponent,data:{titulo:"Buscar Pedidos"}},
    {path:'modificar/:id',component:ModificarPoliciaComponent,data:{titulo:"Modificar Policía"}},
    {path:'detalle-pedido/:id',component:DetallePedidoComponent,data:{titulo:"Detalle"}},

    {path:'ver/:id',component:VerPoliciaComponent,data:{titulo:"Ver Policía"}},


    {path:'dashboard',component:DashboardComponent,data:{titulo:"Dashboard"}},

]}
];

export const PAGES_ROUTES=RouterModule.forChild(pagesRoutes);