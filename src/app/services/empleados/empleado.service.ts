import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioService } from '../usuario/usuario.service';
import { URL_SERVICE } from '../../config/config';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  constructor(public http:HttpClient, public _usuarioService:UsuarioService) { }

  obtenerEmpleado(){
    let url=URL_SERVICE+'/empleado';
    return this.http.get(url).pipe(
    map((res:any)=>{
      return res.empleado
    }));
  }

}
