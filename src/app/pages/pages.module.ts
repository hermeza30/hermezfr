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
import { ModificarPedidosComponent } from './pedidos/modificar-pedidos.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { ModificarCategoriaComponent } from './categoria/modificar-categoria.component';
import { MateriaPrimaComponent } from './materia-prima/materia-prima.component';
import { ModifcarEncargueComponent } from './encargue/modifcar-encargue.component';
import { ValidacionDirective } from '../directivas/validacion.directive';
import { ValidacionSubmitDirective } from '../directivas/validacion-submit.directive';
import { EncargueComponent } from './encargue/encargue.component';

///Material
import { PerfilComponent } from './perfil/perfil.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import { PipesModule } from '../pipes/pipes.module';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [UsuarioComponent, PoliciaComponent, DashboardComponent,PagesComponent, ModificarPoliciaComponent, VerPoliciaComponent, PedidosComponent, BuscarPedidosComponent, DetallePedidoComponent, ModificarPedidosComponent, CategoriaComponent, ModificarCategoriaComponent, MateriaPrimaComponent,ValidacionDirective,ValidacionSubmitDirective, EncargueComponent, ModifcarEncargueComponent,PerfilComponent],
  imports: [
    CommonModule,
    SharedModule,
    PAGES_ROUTES,
    FormsModule,
    ReactiveFormsModule,
    ComponentsModule,
    HttpClientModule,
    MatDatepickerModule,
    MatMomentDateModule,
    MatFormFieldModule,MatCardModule,
    MatInputModule,
    PipesModule,
    MatButtonModule

    
  ],
  exports:[UsuarioComponent,PoliciaComponent,DashboardComponent,PagesComponent,ModificarPoliciaComponent,VerPoliciaComponent,PedidosComponent,DetallePedidoComponent,ModificarPedidosComponent,ModificarCategoriaComponent, EncargueComponent,PerfilComponent],

})
export class PagesModule { }
