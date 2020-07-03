import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { MateriaPrima } from '../../models/materiaprima.model';

@Component({
  selector: 'app-materia-prima',
  templateUrl: './materia-prima.component.html',
  styles: [
  ]
})
export class MateriaPrimaComponent implements OnInit {
  public listaMp:MateriaPrima[];
  public materiaPrima:MateriaPrima;
  public nombre:string;
  public descripcion:string;
  public empresanombre:string;
  public precio:number;
  public form:FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.crearForm();
  }
  crearForm(){
    this.form=new FormGroup({
      nombre:new FormControl('', Validators.required),
      descripcion:new FormControl('', Validators.required),
      empresa:new FormControl('', Validators.required),
      precio:new FormControl('', Validators.required)
    })
  }

  registrar(){
     if(this.form.invalid){
       swal("Registrar materia príma","Debe ingresar valores correspondientes","warning");
      return;
      }
      this.materiaPrima=new MateriaPrima(this.form.value.nombre,this.form.value.descripcion,this.form.value.empresa,this.form.value.precio);
      this.listaMp.push()
  }

}
