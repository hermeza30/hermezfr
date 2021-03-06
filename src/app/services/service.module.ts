import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import{SidebarService,
  PoliciaService,PedidosService,FechasService,
  UsuarioService,LoginguardGuard,AdminGuard,CompraService,ErrorService,EstadoPedidoService,VerificaTokenGuard,ValidacionFormService,EncargueService,EmpleadoService,SubirArchivoService} from './service.index';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    
  ],
  providers:[SidebarService,PoliciaService,UsuarioService,LoginguardGuard,AdminGuard,PedidosService, FechasService,ErrorService,EstadoPedidoService,VerificaTokenGuard,ValidacionFormService, CompraService,EncargueService,EmpleadoService,SubirArchivoService]
})
export class ServiceModule { }
