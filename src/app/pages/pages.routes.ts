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
import { ModificarPedidosComponent } from './pedidos/modificar-pedidos.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { VerificaTokenGuard } from '../services/service.index';
import { MateriaPrimaComponent } from './materia-prima/materia-prima.component';
import { EncargueComponent } from './encargue/encargue.component';
import { PerfilComponent } from './perfil/perfil.component';
const pagesRoutes:Routes=[
    {path:'',component:PagesComponent,canActivate:[LoginguardGuard,VerificaTokenGuard],
children:[
    {path:'usuario',component:UsuarioComponent,canActivate:[AdminGuard],data:{titulo:"Usuarios"}},
    {path:'policia',component:PoliciaComponent,data:{titulo:"Registrar Policía"}},
    {path:'pedido',component:PedidosComponent,data:{titulo:"Registrar Pedido"}},
    {path:'buscar-pedido',component:BuscarPedidosComponent,data:{titulo:"Buscar Pedidos"}},
    {path:'modificar/:id',component:ModificarPoliciaComponent,data:{titulo:"Modificar Policía"}},
    {path:'ver/:id',component:VerPoliciaComponent,data:{titulo:"Ver Policía"}},
    {path:'dashboard',component:DashboardComponent,data:{titulo:"Buscar Policia"}},
    {path:'modificar-pedido/:id',component:ModificarPedidosComponent,data:{titulo:"Modificar Pedido"}},
    {path:'categoria',component:CategoriaComponent,data:{titulo:"Productos"}},
    {path:'materia-prima',component:MateriaPrimaComponent,data:{titulo:"Compra"}},
    {path:'encargue',component:EncargueComponent,data:{titulo:"Encargues"}},
    {path:'perfil',component:PerfilComponent,data:{titulo:"Perfil"}},




]}
];

export const PAGES_ROUTES=RouterModule.forChild(pagesRoutes);