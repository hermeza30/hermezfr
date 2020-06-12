import { Component, OnInit, Output , EventEmitter} from '@angular/core';
import { PedidosService } from '../../../services/pedidos/pedidos.service';
import { Producto } from '../../../models/producto.model';
import { Categoria } from '../../../models/categoria.model';
import { Observable, Subscriber, Subscription } from 'rxjs';

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
public talle:string;
public descripcion:string;
public cantidad:number=1;
public total:number=0;
public suscription:Subscription;
@Output('productos') emitproductos:EventEmitter<Producto[]>=new EventEmitter();

  constructor(public _pedidoService:PedidosService) { 

  }

  ngOnInit(): void {
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
      error=>console.log("Error al agregar producto",error)

    )
  }
  observableProducto(){
    return new Observable((observer:Subscriber<any>)=>{

      if(this.categoria && this.talle.length>0&&this.cantidad>0){
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
