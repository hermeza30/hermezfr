import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PedidosService } from '../../services/service.index';
import { Pedido } from '../../models/pedido.model';

@Component({
  selector: 'app-modificar-pedidos',
  templateUrl: './modificar-pedidos.component.html',
  styles: [
  ]
})
export class ModificarPedidosComponent implements OnInit {
  public id:string;
  public pedido:Pedido;
  constructor(public route:ActivatedRoute, public _pedidoService:PedidosService) {
    this.id=this.route.snapshot.params["id"];
    
   }

  ngOnInit(): void {
    this.buscarPedido();
  }
  buscarPedido(){
    this._pedidoService.buscarPedidoById(this.id).subscribe(res=>this.pedido=res);
  }

}
