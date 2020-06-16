import { Component, OnInit, Input } from '@angular/core';
import { Pedido } from '../../models/pedido.model';
import { EstadoPedidoService } from '../../services/estado/estado-pedido.service';

@Component({
  selector: 'app-detalle-pedido',
  templateUrl: './detalle-pedido.component.html',
  styles: [
  ]
})
export class DetallePedidoComponent implements OnInit {
@Input("pedido") pedido:Pedido;
  constructor(public _estadoServicio:EstadoPedidoService) { }

  ngOnInit(): void {
  }

}
