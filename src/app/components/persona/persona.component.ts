import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormControl, Validators, FormGroup, FormControlName } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ComunicationComponentsService } from '../../services/comunicationComponents/comunication-components.service';
import { Policia } from '../../models/policia.model';
import { Persona } from '../../models/persona.model';


@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styles: [
  ]
})
export class PersonaComponent implements OnInit {
 
  public form:FormGroup;
 public suscripcionComunicarForm:Subscription;
 @Input('ver') ver:boolean=false;
 @Input('persona') persona:Policia;
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
    this.deshabilitar();
  }
  createForm(){
    this.form=new FormGroup({
      nombre:new FormControl(this.persona?.nombre||'',Validators.required),
      telefono:new FormControl(this.persona?.telefono||'',Validators.required),
      direccion:new FormControl(this.persona?.direccion||''),
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


  getJerarquia(){
    return this.form.get('jerarquia') as FormControl;
  }
  deshabilitar(){
    if(this.ver){
      Object.keys(this.form.controls).forEach(key => {
        this.form.controls[key].disable();
       });
    }
  }
}
