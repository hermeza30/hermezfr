import { Injectable } from '@angular/core';
import { UsuarioService } from '../usuario/usuario.service';
import { HttpClient } from '@angular/common/http';
import { Encargue } from '../../models/encargue.model';
import { URL_SERVICE } from '../../config/config';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EncargueService {

  constructor(public _usuarioService:UsuarioService, public http:HttpClient) { }

  public registrarEncargue(encargue:Encargue){
      let url=URL_SERVICE+'/encargue'+'/?token='+this._usuarioService.token;;
      return this.http.post(url,encargue).pipe(
          map((res:any)=>{
            swal("Registrar Encargue","Se registró correctamente el encargue.","success");
            return res.encargue;
          }),
          catchError((err)=>throwError(err))
      );
    }
    public consultarEncargue(){
      let url=URL_SERVICE+'/encargue'+'/?token='+this._usuarioService.token;;
      return this.http.get(url).pipe(
        map((res:any)=>{
          return res.encargue;
        })
      )
    }
    public actualizarEncargue(encargue:Encargue){
      let url=URL_SERVICE+'/encargue/'+encargue._id;
      url+='/?token='+this._usuarioService.token;
      return this.http.put(url,encargue).pipe(
          map((res:any)=>{
            swal("Actualizar Encargue","Se actualizó correctamente el encargue.","success");
            return res.encargue;
          }),
          catchError((err)=>throwError(err))
      );
    }
    public eliminarEncargue(encargue:Encargue){
      let url=URL_SERVICE+'/encargue/'+encargue._id+'/?token='+this._usuarioService.token;
      return this.http.delete(url).pipe(
          map((res:any)=>{
            swal("Eliminar Encargue","Se eliminó correctamente el encargue.","success");
            return res.encargue;
          }),
          catchError((err)=>throwError(err))
      );
    }
  }
