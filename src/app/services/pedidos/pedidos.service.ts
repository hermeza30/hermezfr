import { Injectable } from '@angular/core';
import { UsuarioService } from '../usuario/usuario.service';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICE } from '../../config/config';
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Pedido } from '../../models/pedido.model';
import { FechasService } from '../fechas/fechas.service';
import { Categoria } from 'src/app/models/categoria.model';

@Injectable({
  providedIn: 'root',
})
export class PedidosService {
  constructor(
    public _usuarioService: UsuarioService,
    public http: HttpClient,
    public _fechaService: FechasService
  ) {
    this.cargarCategorias();
  }

  cargarCategorias() {
    let url = URL_SERVICE + '/categoria';
    return this.http.get(url).pipe(
      map((res: any) => {
        return res.categoria;
      }),
      catchError((err) => throwError(err))
    );
  }
  buscarPedidoById(id:string){
    let url=URL_SERVICE+'/pedido/'+id;
    return this.http.get(url).pipe(map((res:any)=>{
      return res.pedido;
    }),catchError(err=>throwError(err)));
  }
  registrarPedido(pedido: Pedido) {
    pedido.fechaPedido = this._fechaService.construirFecha(pedido.fechaPedido);
    pedido.fechaProbableEntrega = this._fechaService.construirFecha(
      pedido.fechaProbableEntrega
    );
    let url = URL_SERVICE + '/pedido';
    url+="/?token="+this._usuarioService.token;
    return this.http.post(url, pedido).pipe(
      map((res: any) => {
        swal(
          'Registrar pedido',
          'Se registró correctamente el pedido.',
          'success'
        );
        return res.pedidosave;
      }),
      catchError((err) => throwError(err))
    );
  }
  registrarCategoria(cat:Categoria){
    let url=URL_SERVICE+'/categoria';
    url+="/?token="+this._usuarioService.token;
   return this.http.post(url,cat).pipe(
      map((res:any)=>{
        swal("Registrar categoría", "Se registró correctamente la categoría"+res.categoria.nombre,"success")
        return res;
      }),
      catchError(err=>throwError(err))
    );
  }
  actualizarCategoria(cat:Categoria){
    let url=URL_SERVICE+'/categoria/'+cat._id;
    url+="/?token="+this._usuarioService.token;
   return this.http.put(url,cat).pipe(
      map((res:any)=>{
        swal("Modificar categoría", "Se modificó correctamente la categoría"+res.categoria.nombre)
        return res;
      }),
      catchError(err=>throwError(err))
    );
  }
  eliminarCategoria(id:string){
    let url=URL_SERVICE+'/categoria/'+id;
    url+="/?token="+this._usuarioService.token;
   return this.http.delete(url).pipe(
      map((res:any)=>{
        swal("Eliminar categoría", "Se eliminó correctamente la categoría"+res.categoria.nombre)
        return res;
      }),
      catchError(err=>throwError(err))
    );
  }
  cargarPedidos(desde: number, tabla: string, param: any) {
    if (tabla === 'fecha') {
      param = this._fechaService.construirFecha(param);
    }
    let url =
      URL_SERVICE + '/pedido/' + tabla + '/' + param + '/?desde=' + desde;
    return this.http.get(url).pipe(
      map((res: any) => {
        return res;
      }),
      catchError((err) => throwError(err))
    );
  }
  actualizarPedido(pedido: Pedido) {
    let url = URL_SERVICE + '/pedido/' + pedido._id;
    url+="/?token="+this._usuarioService.token;
    pedido.fechaRealEntrega=pedido.fechaRealEntrega?this._fechaService.construirFecha(pedido.fechaRealEntrega):null;
    return this.http.put(url, pedido).pipe(
      map((res: any) => {
        swal(
          'Actualziar pedido',
          'Se actualizó correctamente el pedido.',
          'success'
        );
        return res.pedido;
      }),catchError(err=>throwError(err))
    );
  }
}
