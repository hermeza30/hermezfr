import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{SidebarService,
  PoliciaService,PedidosService,
  UsuarioService,LoginguardGuard,AdminGuard} from './service.index';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    
  ],
  providers:[SidebarService,PoliciaService,UsuarioService,LoginguardGuard,AdminGuard,PedidosService]
})
export class ServiceModule { }
