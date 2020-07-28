import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario/usuario.service';
import { DolarService } from '../../services/dolar/dolar.service';
import { Dolar } from 'src/app/models/dolar.model';
import { Router } from '@angular/router';
import { Usuario } from '../../models/usuario.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
  ]
})
export class HeaderComponent implements OnInit {
  public dolar:Dolar;
  public dolarblue:Dolar;
  public usuario:Usuario;

  constructor(public _usuarioService:UsuarioService,public _dolarService:DolarService, public route:Router) {
    this.usuario=this._usuarioService.usuario;
   }

  ngOnInit(): void {
    this.cargargarDolar();
  }
  salir(){
    this._usuarioService.logout();
  }
  cargargarDolar(){
    this._dolarService.llamarApi().subscribe((res:any)=>{
      this.dolar=new Dolar(res[0].casa.compra,res[0].casa.venta,res[0].casa.nombre);
      this.dolarblue=new Dolar(res[1].casa.compra,res[1].casa.venta,res[1].casa.nombre);

    });
  }
  verPerfil(){
    this.route.navigate(['/perfil']);
  }
}
