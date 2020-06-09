import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { FormGroup, FormControl } from '@angular/forms';
import { ComunicationComponentsService } from 'src/app/services/service.index';
import { Policia } from 'src/app/models/policia.model';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styles: [],
})
export class BodyComponent implements OnInit {
  public form: FormGroup;
  public suscripcionComunicarForm: Subscription;
  @Input('policiacuerpo') policiaCuerpo:Policia;
  @Input('ver') ver:boolean=false;
  @Output('formBody') forumlarioBody: EventEmitter<
    FormGroup
  > = new EventEmitter();
  constructor(
    public _comunicarFormularioServicio: ComunicationComponentsService
  ) {
    this.suscripcionComunicarForm = _comunicarFormularioServicio.llamarFormAsObs.subscribe(
      (res) => {
        this.forumlarioBody.emit(this.form);
      }
    );

  }

  ngOnInit(): void {
    this.crearForm();
    this.deshabilitar();
  }
  crearForm() {
    this.form = new FormGroup({
      jerarquia: new FormControl(this.policiaCuerpo?.jerarquia ||''),
      espalda: new FormControl(this.policiaCuerpo?.espalda ||''),
      pecho: new FormControl(this.policiaCuerpo?.pecho ||''),
      largomanga: new FormControl(this.policiaCuerpo?.largomanga ||''),
      cuello: new FormControl(this.policiaCuerpo?.cuello ||''),
      cinturapanza: new FormControl(this.policiaCuerpo?.cinturapanza ||''),
      largotorso: new FormControl(this.policiaCuerpo?.largotorso ||''),
      cintura: new FormControl(this.policiaCuerpo?.cintura ||''),
      cadera: new FormControl(this.policiaCuerpo?.cadera ||''),
      anchopierna: new FormControl(this.policiaCuerpo?.anchopierna ||''),
      tiro: new FormControl(this.policiaCuerpo?.tiro ||''),
      largopierna: new FormControl(this.policiaCuerpo?.largopierna ||''),
      alturarodilla: new FormControl(this.policiaCuerpo?.alturarodilla ||''),
      pantorrilla: new FormControl(this.policiaCuerpo?.pantorrilla ||''),
      observacion: new FormControl(this.policiaCuerpo?.observacion ||'')
    });
  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.suscripcionComunicarForm.unsubscribe();
  }
  deshabilitar(){
    if(this.ver){
      Object.keys(this.form.controls).forEach(key => {
        this.form.controls[key].disable();
       });
    }
  }
}
