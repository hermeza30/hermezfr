import { Injectable } from '@angular/core';
import { UsuarioService } from '../usuario/usuario.service';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICE } from '../../config/config';
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Pedido } from '../../models/pedido.model';
import { FechasService } from '../fechas/fechas.service';
import { createInject } from '@angular/compiler/src/core';

@Injectable({
  providedIn: 'root',
})
export class PedidosService {
  constructor(
    public _usuarioService: UsuarioService,
    public http: HttpClient,
    public _fechaService: FechasService
  ) {}

  cargarCategorias() {
    let url = URL_SERVICE + '/categoria';
    return this.http.get(url).pipe(
      map((res: any) => {
        return res.categoria;
      }),
      catchError((err) => throwError(err))
    );
  }
  registrarPedido(pedido: Pedido) {
    pedido.fechaPedido = this._fechaService.construirFecha(pedido.fechaPedido);
    pedido.fechaProbableEntrega = this._fechaService.construirFecha(pedido.fechaProbableEntrega);
    let url = URL_SERVICE + '/pedido';
    return this.http.post(url, pedido).pipe(
      map((res: any) => {
        swal("Registrar pedido","Se registró correctamente el pedido.","success");
        return res.pedidosave;
      }),
      catchError((err) => throwError(err))
    );
  }
  cargarPedidos(desde:number,estado) {
    let url = URL_SERVICE + '/pedido/'+estado+'/?desde='+desde;
   return this.http.get(url).pipe(
      map((res: any) => {
        return res;
      }),
      catchError((err) => throwError(err))
    );
  }
}
