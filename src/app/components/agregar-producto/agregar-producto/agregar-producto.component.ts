import { Component, OnInit, Output , EventEmitter, Input} from '@angular/core';
import { PedidosService } from '../../../services/service.index';
import { Producto } from '../../../models/producto.model';
import { Categoria } from '../../../models/categoria.model';
import { Observable, Subscriber, Subscription } from 'rxjs';
import { EstadoPedidoService } from '../../../services/service.index';

@Component({
  selector: 'app-agregar-producto',
  templateUrl: './agregar-producto.component.html',
  styles: [
  ]
})
export class AgregarProductoComponent implements OnInit {
public categoria:Categoria=new Categoria("","",null);
public productos:Producto[]=[];
public categorias:Categoria[];
public talle:number;
public descripcion:string;
public cantidad:number=1;
public total:number=0;
public suscription:Subscription;
@Output('productos') emitproductos:EventEmitter<Producto[]>=new EventEmitter();
@Input('productospedidos') productospedidos:Producto[]=[];
@Output('total') emitTotal:EventEmitter<number>=new EventEmitter();
  constructor(public _pedidoService:PedidosService, public _estadoService:EstadoPedidoService) { 

  }

  ngOnInit(): void {
    if(this.productospedidos.length>0){
      this.productos=this.productospedidos;
      this.totalPrecioCantidad();
    }
    this.cargarCategorias();
  }
  cargarCategorias(){
    this._pedidoService.cargarCategorias().subscribe(res=>this.categorias=res);
  }
  agregarCategoria(event:string){
    this.categoria=this.categorias.find((x:Categoria)=>x._id==event);
  }

  agregarProducto(){
    this.suscription=this.observableProducto().subscribe(
      productos=>this.emitproductos.emit(productos),
      error=>swal('Registrar pedido','Debe seleccionar producto.','warning')
    )
  }
  observableProducto(){
    return new Observable((observer:Subscriber<any>)=>{

      if(this.categoria && this.talle>0&&this.cantidad>0){
        this.productos.push(this.crearProducto());
        this.totalPrecioCantidad();
        this.cantidad=1;
        observer.next(this.productos);
      }else{

        observer.error();
      }
    });
  }



  totalPrecioCantidad(){
    this.total=this.productos.length>0? this.productos.reduce(function(acumulador:number,producto){
      return acumulador+producto.preciocantidad;
     },0):0;
     this.emitTotal.emit(this.total);
  }
  removerProducto(c:Producto){
    let i:number=this.productos.indexOf(c);
    if (i !== -1) {
        this.productos.splice(i, 1);
        this.totalPrecioCantidad();
    }     
  }
  crearProducto():Producto{
    let producto:Producto=new Producto();
    producto.categoria=new Categoria('','',null);
    producto.estado=this._estadoService.getEstado(1);
    producto.categoria._id=this.categoria._id;
    producto.talle=this.talle;
    producto.categoria._id=this.categoria._id;
    producto.descripcion=this.descripcion;
    producto.nombre=this.categoria.nombre;
    producto.cantidad=this.cantidad;
    producto.preciocantidad=this.cantidad*this.categoria.precio;
  
    return producto;
  }
}
