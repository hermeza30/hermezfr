import { Component, OnInit } from '@angular/core';
import { Policia } from '../../models/policia.model';
import { Producto } from '../../models/producto.model';
import { Pedido } from '../../models/pedido.model';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styles: [
  ]
})
export class PedidosComponent implements OnInit {
  public pedido:Pedido;
  public fechaPedido:Date=new Date();
  constructor() { }

  ngOnInit(): void {
    this.iniciarPedido();
  }
  registrar(){
   if(this.pedido.policia.length>0&&this.pedido.prductos.length>0){
    console.log(this.pedido)
   }else{
     swal("Registrar pedido","Ingrese producto y policia","warning");
     return;
   }
  }
  cargarPersona(id:string){
    this.pedido.policia=id;
  }
  cargarProductos(pr:any){
    this.pedido.prductos=pr;
  }
  iniciarPedido(){
    this.pedido=new Pedido('',null,'',"1",null,this.fechaPedido,null,null);
  }
}
