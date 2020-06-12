import { Component, OnInit } from '@angular/core';
import { PedidosService } from '../../services/pedidos/pedidos.service';
import { Pedido } from '../../models/pedido.model';
import { EstadoPedidoService } from '../../services/estado/estado-pedido.service';

@Component({
  selector: 'app-buscar-pedidos',
  templateUrl: './buscar-pedidos.component.html',
  styles: [
  ]
})
export class BuscarPedidosComponent implements OnInit {
  public pedidos:Pedido[];
  desde: number = 0;
  totalRegistros: number = 0;
  constructor(public _pedidoService:PedidosService,public _estadoService:EstadoPedidoService) { }

  ngOnInit(): void {
    this.cargarPedidos();
  }
  cargarPedidos(){
      this._pedidoService.cargarPedidos( this.desde,2).subscribe((res:any)=>{
        this.totalRegistros=res.total;
        console.log(res.pedido)
        this.pedidos=res.pedido;});
  }
  cambiarDesde( valor: number ) {

    let desde = this.desde + valor;

    if ( desde >= this.totalRegistros ) {
      return;
    }

    if ( desde < 0 ) {
      return;
    }

    this.desde += valor;
    this.cargarPedidos();

  }
}
