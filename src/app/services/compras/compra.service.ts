import { Injectable } from '@angular/core';
import { UsuarioService } from '../service.index';
import { HttpClient } from '@angular/common/http';
import { Compra } from '../../models/compra.model';
import { URL_SERVICE } from '../../config/config';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompraService {

  constructor(public _usuarioService:UsuarioService,  public http:HttpClient) { }
  registrarCompra(compra:Compra){
    let url=URL_SERVICE+'/compra'
    return  this.http.post(url,compra).pipe( map((res:any)=>{
          swal('Registrar Compra','Se registó correctamente la compra','success');  
          return res.compra
      }),catchError(err=>throwError(err)));
  }
  obtenerCompras(){
    let url=URL_SERVICE+'/compra';

    return this.http.get(url).pipe(map((res:any)=>{return res.compra}));
  }
}
