import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UsuarioService } from '../usuario/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class LoginguardGuard implements CanActivate {
constructor(public router:Router,public _usuarioServices:UsuarioService){}
  canActivate():boolean{
    if(this._usuarioServices.estaLogueado()){
      return true;
    }else{
      this.router.navigate(['/login']);
      return false;
    }
  }
}
