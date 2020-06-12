import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { UsuarioComponent } from './usuario/usuario.component';
import { PoliciaComponent } from './policia/policia.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PAGES_ROUTES } from './pages.routes';

import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { PagesComponent } from './pages.component';
import { ComponentsModule } from '../components/components.module';
import { HttpClientModule } from '@angular/common/http';
import { ModificarPoliciaComponent } from './policia/modificar-policia.component';
import { VerPoliciaComponent } from './policia/ver-policia.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { BuscarPedidosComponent } from './pedidos/buscar-pedidos.component';
import { DetallePedidoComponent } from './detalle-pedido/detalle-pedido.component';


@NgModule({
  declarations: [UsuarioComponent, PoliciaComponent, DashboardComponent,PagesComponent, ModificarPoliciaComponent, VerPoliciaComponent, PedidosComponent, BuscarPedidosComponent, DetallePedidoComponent],
  imports: [
    CommonModule,
    SharedModule,
    PAGES_ROUTES,
    FormsModule,
    ReactiveFormsModule,
    ComponentsModule,
    HttpClientModule

  ],
  exports:[UsuarioComponent,PoliciaComponent,DashboardComponent,PagesComponent,ModificarPoliciaComponent,VerPoliciaComponent,PedidosComponent,DetallePedidoComponent]
})
export class PagesModule { }
