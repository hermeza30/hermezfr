import { Component, OnInit, Input } from '@angular/core';
import { Compra } from 'src/app/models/compra.model';
import { MateriaPrima } from '../../models/materiaprima.model';

@Component({
  selector: 'app-detalle-materia-prima',
  templateUrl: './detalle-materia-prima.component.html',
  styles: [
  ]
})
export class DetalleMateriaPrimaComponent implements OnInit {
@Input('detalle') compra:Compra[];
public lista:MateriaPrima[];  
constructor() { }

  ngOnInit(): void {
  }
  seleccionar(compra:Compra){
    this.lista=compra.materiaPrima;
  }

}
