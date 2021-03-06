import { Component, OnInit, Input } from '@angular/core';
import { Pedido } from '../../models/pedido.model';
import { EstadoPedidoService } from '../../services/service.index';
import { PedidosService } from '../../services/service.index';

@Component({
  selector: 'app-detalle-pedido',
  templateUrl: './detalle-pedido.component.html',
  styles: [],
})
export class DetallePedidoComponent implements OnInit {
  @Input('pedido') pedido: Pedido;
  @Input('totalcobrar') totalcobrar: number;
  public pagado="label-pagado";
  public nopago="label-nopagado";
  public cobrar: number;
  constructor(
    public _estadoServicio: EstadoPedidoService,
    public _pedidoService: PedidosService
  ) {}

  ngOnInit(): void {}
  actualizar() {
    this.obtenerEstado();
    if(this.validandoEstados()){
      this._pedidoService.actualizarPedido(this.pedido).subscribe((res) => {});
    }
  }
  obtenerEstado() {
    for (const iterator of this.pedido.productos) {
      iterator.estado = this._estadoServicio.getEstadoProducto(iterator.estado._id);
    }
  }
  cambiarEstadoProducto():boolean {
    let idEstado=this._estadoServicio.getEstadoProductoByString("Terminado")._id;
    for (const it of this.pedido.productos) {
      if (it.estado._id!=idEstado) {
        return;
      }
    }

    this.pedido.estado=this._estadoServicio.getEstadoPedidoByString("Terminado")._id;
  }
  entregando(){
    let idEntregado=this._estadoServicio.getEstadoPedidoByString("Entregado")._id;

    if(idEntregado==this.pedido.estado){
      let fecha=new Date();
      this.pedido.fechaRealEntrega=fecha;
    }else{
      this.pedido.fechaRealEntrega=null;
    }
  }
  validandoEstados(){
    let idPendiente=this._estadoServicio.getEstadoProductoByString("Pendiente")._id;
    let idCortado=this._estadoServicio.getEstadoProductoByString("Cortado")._id;
    let idEntregado=this._estadoServicio.getEstadoPedidoByString("Entregado")._id;
    let idTerminado=this._estadoServicio.getEstadoPedidoByString("Terminado")._id;

    if(this.pedido.productos.length>0){
      for (const it of this.pedido.productos) {
          if((this.pedido.estado===idEntregado||this.pedido.estado===idTerminado)&&(it.estado._id===idPendiente||it.estado._id===idCortado)){
            swal("Verificar","El pedido no puede pasar a terminado porque hay algun producto que esta pendiente de terminarse","warning");
            return false;
          }
      }
    }
    return true;
  }
}
