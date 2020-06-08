import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { FormGroup, FormControl } from '@angular/forms';
import { ComunicationComponentsService } from 'src/app/services/service.index';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styles: [],
})
export class BodyComponent implements OnInit {
  public form: FormGroup;
  public suscripcionComunicarForm: Subscription;
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
  }
  crearForm() {
    this.form = new FormGroup({
      espalda: new FormControl(''),
      pecho: new FormControl(''),
      largomanga: new FormControl(''),
      cuello: new FormControl(''),
      cinturapanza: new FormControl(''),
      largotorso: new FormControl(''),
      cintura: new FormControl(''),
      cadera: new FormControl(''),
      anchopierna: new FormControl(''),
      tiro: new FormControl(''),
      largopierna: new FormControl(''),
      alturarodilla: new FormControl(''),
      pantorrilla: new FormControl(''),
      observacion: new FormControl('')
    });
  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.suscripcionComunicarForm.unsubscribe();
  }
}
