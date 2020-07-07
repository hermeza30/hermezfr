import { Injectable } from '@angular/core';
import { UsuarioService } from '../service.index';
import { HttpClient } from '@angular/common/http';
import { Compra } from '../../models/compra.model';
import { URL_SERVICE } from '../../config/config';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CompraService {

  constructor(public _usuarioService:UsuarioService,  public http:HttpClient) { }
  registrarCompra(compra:Compra){
    let url=URL_SERVICE+'/compra'
      this.http.post(url,compra).pipe( map((res:any)=>{
          console.log(res);
      }));
  }
}
