import { Component, OnInit, Input } from '@angular/core';
import { Pedido } from '../../models/pedido.model';
import { EstadoPedidoService } from '../../services/service.index';
import { PedidosService } from '../../services/service.index';
import { Estado } from 'src/app/models/estado.model';

@Component({
  selector: 'app-detalle-pedido',
  templateUrl: './detalle-pedido.component.html',
  styles: [],
})
export class DetallePedidoComponent implements OnInit {
  @Input('pedido') pedido: Pedido;
  public cobrar: number;
  constructor(
    public _estadoServicio: EstadoPedidoService,
    public _pedidoService: PedidosService
  ) {}

  ngOnInit(): void {}
  actualizar() {
    this.obtenerEstado();
    this._pedidoService.actualizarPedido(this.pedido).subscribe((res) => {});
  }
  obtenerEstado() {
    for (const iterator of this.pedido.productos) {
      iterator.estado = this._estadoServicio.getEstadoProducto(
        iterator.estado._id
      );
    }
  }
}
