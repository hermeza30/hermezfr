import { Injectable } from '@angular/core';
import { UsuarioService } from '../usuario/usuario.service';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICE } from '../../config/config';
import { catchError ,map } from 'rxjs/operators';
import { throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PedidosService {

  constructor(public _usuarioService:UsuarioService,public http:HttpClient) { }
 
 
  cargarCategorias(){
    let url=URL_SERVICE+'/categoria'
    return this.http.get(url).pipe(

        map(
          (res:any)=>{
            return res.categoria;
          }
        ),
        catchError((err)=>throwError(err))

    );
  }
}
