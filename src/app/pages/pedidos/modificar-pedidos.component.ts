import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PedidosService } from '../../services/service.index';
import { Pedido } from '../../models/pedido.model';
import { EstadoPedidoService } from '../../services/estado/estado-pedido.service';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-modificar-pedidos',
  templateUrl: './modificar-pedidos.component.html',
  styles: [
  ],

})
export class ModificarPedidosComponent implements OnInit {
  public id:string;
  public pedido:Pedido;
  public estado:string="pepe";
  public form:FormGroup;
  constructor(public route:ActivatedRoute, public _pedidoService:PedidosService, public _estadoService:EstadoPedidoService) {
    this.id=this.route.snapshot.params["id"];
    
   }

  ngOnInit(): void {
    this.buscarPedido();
  }

  buscarPedido(){
    this._pedidoService.buscarPedidoById(this.id).subscribe(res=>{this.pedido=res;
    this.obtenerEstado()});
  }
  obtenerEstado(){
    this.estado=this._estadoService.getEstado(this.pedido.estado).nombre;
  }
  cambiandoDatosDelPedido(total:number){
      this.pedido.total=total;
  }
  modificarPedido(){
    console.log("Modificar");
    console.log(this.pedido);
  }
  mostrarFecha(type: string, event: MatDatepickerInputEvent<Date>){
    console.log(event.value);
    console.log(this.pedido.fechaProbableEntrega);
  }

}
