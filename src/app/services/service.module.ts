import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import{SidebarService,
  PoliciaService,PedidosService,FechasService,
  UsuarioService,LoginguardGuard,AdminGuard,ErrorService,EstadoPedidoService,VerificaTokenGuard,ValidacionFormService} from './service.index';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    
  ],
  providers:[SidebarService,PoliciaService,UsuarioService,LoginguardGuard,AdminGuard,PedidosService, FechasService,ErrorService,EstadoPedidoService,VerificaTokenGuard,ValidacionFormService]
})
export class ServiceModule { }
