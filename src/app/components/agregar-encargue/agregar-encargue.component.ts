import { Component, OnInit, Input } from '@angular/core';
import { Encargue } from '../../models/encargue.model';

@Component({
  selector: 'app-agregar-encargue',
  templateUrl: './agregar-encargue.component.html',
  styles: [
  ]
})
export class AgregarEncargueComponent implements OnInit {
  @Input('encargues') encargues:Encargue[];
  constructor() { }

  ngOnInit(): void {
  }

}
