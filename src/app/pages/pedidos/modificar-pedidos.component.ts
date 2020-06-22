import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PedidosService } from '../../services/service.index';
import { Pedido } from '../../models/pedido.model';
import { EstadoPedidoService } from '../../services/service.index';
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
  public fecha:Date;
  constructor(public route:ActivatedRoute, public _pedidoService:PedidosService,public router:Router, public _estadoService:EstadoPedidoService) {
    this.id=this.route.snapshot.params["id"];

   }

  ngOnInit(): void {
    this.buscarPedido();
  }

  buscarPedido(){
    this._pedidoService.buscarPedidoById(this.id).subscribe(res=>{this.pedido=res;
      this.fecha=new Date(this.pedido.fechaProbableEntrega);

    this.obtenerEstado()});
  }
  obtenerEstado(){
    this.estado=this._estadoService.getEstado(this.pedido.estado).nombre;
  }
  cambiandoDatosDelPedido(total:number){
      this.pedido.total=total;
  }
  modificarPedido(){
    if(this.verificandoSiHayProductoNuevo()){
      this._pedidoService.actualizarPedido(this.pedido).subscribe(()=>this.router.navigate(["/buscar-pedido"]));
    }
  }
  verificandoSiHayProductoNuevo():boolean{
    if(this.pedido.productos.length<=0){
      swal("Modificar Pedido", "Debe ingresar al menos un producto para modificar el pedido.","warning");
      return false;
    }
    if(this.pedido.senia>this.pedido.total){
      swal("Modificar Pedido", "La seña no puede ser mayor a el monto total $"+this.pedido.total,"warning");
      return false;
    }
    for (const it of this.pedido.productos) {
        if(it.estado._id===this.obteniendoEstadoPendiente()){
          this.pedido.estado=this._estadoService.getEstadoPedidoByString("Pendiente")._id;
         break;
        }
    }
    return true;
  }
  obteniendoEstadoPendiente():number{
    return this._estadoService.getEstadoProductoByString("Pendiente")._id;
  }
  cambiando(event:any){
    if(event?._d){
      this.pedido.fechaProbableEntrega=new Date(this.fecha);
    }
  }


}
