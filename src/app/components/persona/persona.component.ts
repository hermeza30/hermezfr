import { Component, OnInit, Output,EventEmitter  } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ComunicationComponentsService } from '../../services/comunicationComponents/comunication-components.service';


@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styles: [
  ]
})
export class PersonaComponent implements OnInit {
 public form:FormGroup;
 public suscripcionComunicarForm:Subscription;
  @Output("formPersona") forumlarioPersona:EventEmitter<FormGroup>=new EventEmitter();
  constructor(public _comunicarFormularioServicio:ComunicationComponentsService) {
   this.suscripcionComunicarForm=_comunicarFormularioServicio.llamarFormAsObs.subscribe(res=>{
     if(this.form.invalid){
      Object.keys(this.form.controls).forEach(key => {
        this.form.controls[key].markAsDirty();
      });
      return;
     }
      this.forumlarioPersona.emit(this.form);
     
   });
  }

  ngOnInit(): void {
    this.createForm();
  }
  createForm(){
    this.form=new FormGroup({
      nombre:new FormControl("",Validators.required),
      telefono:new FormControl("",Validators.required),
      jerarquia:new FormControl(""),
      direccion:new FormControl(""),
    });
  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.suscripcionComunicarForm.unsubscribe();
  }
  getNombre(){
    return this.form.get('nombre') as FormControl;
  }
  getTelefono(){
    return this.form.get('telefono') as FormControl
  }
}
