import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Policia } from '../../models/policia.model';
import { PoliciaService } from '../../services/policia/policia.service';
import { Subscription } from 'rxjs';
import { ComunicationComponentsService } from '../../services/comunicationComponents/comunication-components.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [],
})
export class BusquedaComponent implements OnInit {
  @Input('policias') policias: Policia[];
  @Output('cargar') cargarbusqueda: EventEmitter<[boolean,number]> = new EventEmitter();
  @Output('buscar') busqueda: EventEmitter<
    [string, string]
  > = new EventEmitter();
  desde: number = 0;
  totalRegistros: number = 0;
  public suscripcion:Subscription;
  constructor(public router: Router, public _policiaService: PoliciaService, public _comunicacion:ComunicationComponentsService) {
    this._comunicacion.llamarTotalasObs.subscribe(valor=>{
      this.totalRegistros=valor;
    });
  }

  ngOnInit(): void {}
  irAcrear() {
    this.router.navigate(['/policia']);
  }
  eliminar(id: string) {
    this._policiaService.eliminarPolicia(id).subscribe((res) => {
      this.cargarbusqueda.emit([true,null]);
    });
  }
  buscar(key: any, tipo: string) {
    this.busqueda.emit([key, tipo]);
  }
  cambiarDesde(valor: number) {
    let desde = this.desde + valor;
    if (desde >= this.totalRegistros) {
      return;
    }

    if (desde < 0) {
      return;
    }

    this.desde += valor;
    this.cargarbusqueda.emit([true,this.desde]);
  }
}
