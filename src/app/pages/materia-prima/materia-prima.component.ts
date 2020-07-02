import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MateriaPrima } from '../../models/materiaprima.model';

@Component({
  selector: 'app-materia-prima',
  templateUrl: './materia-prima.component.html',
  styles: [
  ]
})
export class MateriaPrimaComponent implements OnInit {
  public materiaPrima:MateriaPrima;
  public nombre:string;
  public descripcion:string;
  public precio:number;
  constructor() { }

  ngOnInit(): void {
  }

  registrar(f:NgForm){
     if(f.invalid){
       swal("Registrar materia príma","Debe ingresar valores correspondientes","warning");
     }
  }

}
