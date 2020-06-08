import { Injectable } from '@angular/core';
import { map, catchError } from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import { URL_SERVICE } from '../../config/config';
import { throwError } from 'rxjs';
import { Policia } from '../../models/policia.model';
import { UsuarioService } from '../service.index';
@Injectable({
  providedIn: 'root'
})
export class PoliciaService {
  
  constructor(public http:HttpClient, public _usuarioService:UsuarioService) { }

  public consultarPolicias(){
    let url=URL_SERVICE+'/policia';
   return this.http.get(url).pipe(map((res:any)=>{
      return res.policia;
    }),catchError(err=>{
     swal("Error al registrar policia.",err.error.message, "error");
      return throwError(err);
    }));
  }
  public registrarPolicia(policia:Policia){
    let url=URL_SERVICE+'/policia';
    url+='/?token='+this._usuarioService.token;
    return this.http.post(url,{policia}).pipe(
      
      map((res:any)=>{
        swal("Se registro correctamente la persona: ",res.policia[0].nombre,"success");

        return res.policia;
      }),
      
      catchError(err=>{
        swal("Error al registrar persona: ",err.error.err.message,"error");
        return throwError(err);
      }))
  }
}
