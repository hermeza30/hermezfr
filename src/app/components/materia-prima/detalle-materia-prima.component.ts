import { Component, OnInit, Input } from '@angular/core';
import { MateriaPrima } from '../../models/materiaprima.model';

@Component({
  selector: 'app-detalle-materia-prima',
  templateUrl: './detalle-materia-prima.component.html',
  styles: [
  ]
})
export class DetalleMateriaPrimaComponent implements OnInit {
@Input('detalle') detalle:MateriaPrima[];
  constructor() { }

  ngOnInit(): void {
  }

}
