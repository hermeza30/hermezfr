import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{SidebarService,
  PoliciaService,
  UsuarioService,LoginguardGuard} from './service.index';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    
  ],
  providers:[SidebarService,PoliciaService,UsuarioService,LoginguardGuard]
})
export class ServiceModule { }
