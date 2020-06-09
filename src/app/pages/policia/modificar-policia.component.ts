import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { PoliciaService } from '../../services/policia/policia.service';
import { Policia } from '../../models/policia.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ComunicationComponentsService } from 'src/app/services/service.index';
import { FormGroup } from '@angular/forms';
import { Persona } from '../../models/persona.model';

@Component({
  selector: 'app-modificar-policia',
  templateUrl: './modificar-policia.component.html',
  styles: [],
})
export class ModificarPoliciaComponent implements OnInit {
  public policia: Policia;
  public id: string;
  public formModificarbody: FormGroup;
  public formModificarPersona: FormGroup;
  constructor(
    public _policiaService: PoliciaService,
    public router: Router,
    public route: ActivatedRoute,
    public _comunicationComponentsService: ComunicationComponentsService
  ) {
    this.id = this.route.snapshot.params['id'];
    this.buscarPolicia();
  }

  ngOnInit(): void {}
  buscarPolicia() {
    this._policiaService.cargarPolicia(this.id).subscribe((policia) => {
      this.policia=policia;
    });
  }
  actualizar() {
    this._comunicationComponentsService.servicioLLamarForm(true);
    if (!this.formModificarPersona || !this.formModificarbody) {
      swal(
        'Verifique',
        'Verifique si los datos ingresados son correctos:',
        'warning'
      );
      return;
    }

    this.policia = this.crearPolicia();
    this._policiaService
      .actualizarPolicia(this.id, this.policia)
      .subscribe((res) => this.router.navigate(['/dashboard']));
  }
  crearPolicia(): Policia {
    let policia = new Policia(
      this.policia._id,
      this.formModificarPersona.value.nombre,
      this.formModificarPersona.value.telefono,
      this.formModificarPersona.value.cuil,
      this.formModificarPersona.value.direccion,
      this.formModificarbody.value.jerarquia,
      true,
      this.formModificarbody.value.cuerpo,
      this.formModificarbody.value.espalda,
      this.formModificarbody.value.pecho,
      this.formModificarbody.value.largomanga,
      this.formModificarbody.value.cuello,
      this.formModificarbody.value.cinturapanza,
      this.formModificarbody.value.largotorso,
      this.formModificarbody.value.cintura,
      this.formModificarbody.value.cadera,
      this.formModificarbody.value.anchopierna,
      this.formModificarbody.value.tiro,
      this.formModificarbody.value.largopierna,
      this.formModificarbody.value.alturarodilla,
      this.formModificarbody.value.pantorrilla,
      this.formModificarbody.value.observacion
    );
    return policia;
  }
  cargarFormPersona(event: FormGroup) {
    this.formModificarPersona = event;
  }
  cargarFormBody(event: FormGroup) {
    this.formModificarbody = event;
  }
  volver(){
    this.router.navigate(['/dashboard']);
  }
}
