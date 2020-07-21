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
      let url=URL_SERVICE+'/encargue';
      return this.http.post(url,encargue).pipe(
          map((res:any)=>{
            swal("Registrar Encargue","Se registró correctamente el encargue.","success");
            return res.encargue;
          }),
          catchError((err)=>throwError(err))
      );
    }
    public consultarEncargue(){
      let url=URL_SERVICE+'/encargue';
      return this.http.get(url).pipe(
        map((res:any)=>{
          return res.encargue;
        })
      )
    }
  }
