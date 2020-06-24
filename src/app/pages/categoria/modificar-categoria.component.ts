import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { Categoria } from '../../models/categoria.model';
import { PedidosService } from '../../services/service.index';

@Component({
  selector: 'app-modificar-categoria',
  templateUrl: './modificar-categoria.component.html',
  styles: [
  ]
})
export class ModificarCategoriaComponent implements OnInit {
@Input('categoria')categoria:Categoria;
  constructor(public _categorias: PedidosService) { }

  ngOnInit(): void {
  }
  modificar(){
    this._categorias.actualizarCategoria(this.categoria).subscribe();
  }

}
