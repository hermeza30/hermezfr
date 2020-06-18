import { Component, OnInit } from '@angular/core';
import { Producto } from '../../models/producto.model';
import { Pedido } from '../../models/pedido.model';
import { PedidosService } from '../../services/pedidos/pedidos.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ErrorService } from 'src/app/services/service.index';
import { Estado } from 'src/app/models/estado.model';
import { EstadoPedidoService } from '../../services/estado/estado-pedido.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styles: [
  ]
})
export class PedidosComponent implements OnInit {
  public pedido:Pedido;
  public fechaPedido:Date=new Date();
  public form:FormGroup;
  constructor(public route:Router,public _pedidoService:PedidosService, public _errorService:ErrorService, public _estadoService:EstadoPedidoService) { }

  ngOnInit(): void {
    this.iniciarPedido();
  this.crearForm();
  }
  crearForm(){
    this.form=new FormGroup({
      fechape:new FormControl(null,Validators.required),
      observacion:new FormControl(null),
      senia:new FormControl()
    })
  }
  getFecha(){
    return this.form.get("fechape") as FormControl;
  }
  registrar(){

    this.validarForm();
    if(this.pedido.policia._id.length>0&&this.pedido.productos.length>0){

            this.calcularTotal();
            if(!this.validarSenia()){
              this.pedido.fechaProbableEntrega=this.form.value.fechape;
              this.pedido.senia=this.form.value.senia;
              this._pedidoService.registrarPedido(this.pedido).subscribe(res=>{
                  this.route.navigate(["/buscar-pedido"]);
              });
            };

   }else{
     swal("Registrar pedido","Ingrese producto y policia","warning");
     return;
   }
  }
  validarForm(){
    if(this.form.invalid){
      swal("Registrar pedido","Ingrese la fecha probable de entrega del producto","warning");
      this._errorService.mostrarError();
     return;
    }

  }
  validarSenia():boolean{
    if(this.form.value.senia>this.pedido.total){
      swal("Registrar pedido","La seña ingresada debe ser menor al total del pedido","warning");
      this._errorService.mostrarError();
      return true;
    }
    return false;
  }
  cargarPersona(id:string){
    this.pedido.policia._id=id;
  }
  cargarProductos(pr:any){
    this.pedido.productos=pr;
  }
  iniciarPedido(){
    this.pedido=new Pedido('',null,null,this._estadoService.estadoPedidos()[0]._id,null,this.fechaPedido,this.fechaPedido ,null,null);
  }
  calcularTotal(){
    this.pedido.total=this.pedido.productos.reduce((acumulador:number=0,currentValue:Producto)=>{
      return acumulador+currentValue.preciocantidad;
    },0)
  }
}
