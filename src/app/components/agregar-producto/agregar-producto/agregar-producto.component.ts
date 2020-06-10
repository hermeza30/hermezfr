import { Component, OnInit } from '@angular/core';
import { PedidosService } from '../../../services/pedidos/pedidos.service';
import { Producto } from '../../../models/producto.model';
import { Categoria } from '../../../models/categoria.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-agregar-producto',
  templateUrl: './agregar-producto.component.html',
  styles: [
  ]
})
export class AgregarProductoComponent implements OnInit {
public categoria:Categoria=new Categoria("","","");
public productos:Producto[]=[];
public categorias:Categoria[];
public talle:string
public descripcion:string
  constructor(public _pedidoService:PedidosService) { }

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
    if(this.categoria && this.talle.length>0){
      let producto:Producto=new Producto();
      producto.talle=this.talle;
      producto.categoria=this.categoria._id;
      producto.precio=this.categoria.precio;
      producto.descripcion=this.descripcion;
      producto.nombre=this.categoria.nombre;
      this.productos.push(producto);
    }

  }
  removerProducto(c:Producto){
    let i:number=this.productos.indexOf(c);
    if (i !== -1) {
        this.productos.splice(i, 1);
    }     
  }
}
