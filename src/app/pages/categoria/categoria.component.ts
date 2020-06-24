import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Categoria } from '../../models/categoria.model';
import { PedidosService } from '../../services/service.index';
@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styles: [],
})
export class CategoriaComponent implements OnInit {
  public form: FormGroup;
  public categorias: Categoria[];
  public categoria:Categoria;
  public preciopro:number;
  constructor(public _categorias: PedidosService) {}

  ngOnInit(): void {
    this.cargarCategorias();
    this.crearForm();
  }
  crearForm(){
    this.form=new FormGroup({
      nombre:new FormControl('',Validators.required),
      precio:new FormControl('',Validators.required),
      descripcion:new FormControl()
    });
  }
  cargarCategorias() {
    this._categorias.cargarCategorias().subscribe((res) => {
      this.categorias = res;
    });
  }
  seleccionandoProducto(event:Categoria){
    this.categoria=event;
  }
  eliminar(id:string){
    this._categorias.eliminarCategoria(id).subscribe(res=>this.cargarCategorias());
  }
  registrar(){
    console.log(this.form)
    if(this.form.invalid){
      swal("Registrar producto","No se puede registrar producto","warning");
    }
    let cat:Categoria=new Categoria(null,this.form.value.nombre,this.form.value.precio,this.form.value.descripcion);
    this._categorias.registrarCategoria(cat).subscribe(res=>{this.form.reset();this.cargarCategorias();});
  }

}
