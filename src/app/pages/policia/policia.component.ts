import { Component, OnInit } from '@angular/core';
import { Policia } from '../../models/policia.model';
import { FormGroup } from '@angular/forms';
import {
  PoliciaService,
  ComunicationComponentsService,
} from '../../services/service.index';
import { Persona } from '../../models/persona.model';

@Component({
  selector: 'app-policia',
  templateUrl: './policia.component.html',
  styles: [],
})
export class PoliciaComponent implements OnInit {
  private formPersona: FormGroup;
  private formBody: FormGroup;
  private policia: Policia;
  constructor(
    public _policiaService: PoliciaService,
    public _comunicationComponentsService: ComunicationComponentsService
  ) {
    
  }

  ngOnInit(): void {}
  registrar() {
    this._comunicationComponentsService.servicioLLamarForm(true);

    if(!this.formPersona || !this.formBody){
      swal("Verifique","Verifique si los datos ingresados son correctos:","warning");
      return;
    }

   this.policia=this.crearPolicia();
   this._policiaService.registrarPolicia(this.policia).subscribe();
  }
  crearPolicia():Policia {
    let persona = new Persona(
      this.formPersona.value.nombre,
      this.formPersona.value.telefono,
      this.formPersona.value.cuil,
      this.formPersona.value.direccion
    );

    let policia = new Policia(
      null,
      persona,
      this.formPersona.value.jerarquia,
      this.formPersona.value.estado,
      this.formBody.value.cuerpo,
      this.formBody.value.espalda,
      this.formBody.value.pecho,
      this.formBody.value.largomanga,
      this.formBody.value.cuello,
      this.formBody.value.cinturapanza,
      this.formBody.value.largotorso,
      this.formBody.value.cintura,
      this.formBody.value.cadera,
      this.formBody.value.anchopierna,
      this.formBody.value.tiro,
      this.formBody.value.largopierna,
      this.formBody.value.alturarodilla,
      this.formBody.value.pantorrilla,
      this.formBody.value.observacion
    );
    return policia;
  }
  formulariosValidos(){

  }
  
  cargarFormPersona(event: FormGroup) {
    this.formPersona = event;
  }
  cargarFormBody(event: FormGroup) {
    this.formBody = event;
  }
}
