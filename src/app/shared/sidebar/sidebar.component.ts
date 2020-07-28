import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../../services/sidebar/sidebar.service';
import { UsuarioService } from '../../services/usuario/usuario.service';
import { Usuario } from '../../models/usuario.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent implements OnInit {
  public sidebar:SidebarService;
  public usuario:Usuario;
  constructor(public _sidebarService:SidebarService, public _usuarioService:UsuarioService) {
    this.sidebar=_sidebarService;
   }

  ngOnInit(): void {
    this.usuario=this._usuarioService.usuario;
  } 
  salir(){
    this._usuarioService.logout();
  }

}
