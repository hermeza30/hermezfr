import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Encargue } from '../../models/encargue.model';
import { sample } from 'rxjs/operators';
import { EncargueService } from '../../services/encargues/encargue.service';

@Component({
  selector: 'app-agregar-encargue',
  templateUrl: './agregar-encargue.component.html',
  styles: [
  ]
})
export class AgregarEncargueComponent implements OnInit {
  @Input('encargues') encargues:Encargue[];
  @Output('cargarEncargue') recargar:EventEmitter<boolean>=new EventEmitter();
  public encargue:Encargue;
  public fechaHoy=new Date();
  constructor(public _encargueService:EncargueService) { }

  ngOnInit(): void {
  }
  
  ver(encargue:Encargue){
    this.encargue=encargue;
  }
  actualizar(encargue:Encargue){
   if(this.validar(encargue)){
      encargue.fechaDevolucion=new Date(this.fechaHoy.getFullYear(),this.fechaHoy.getMonth(),this.fechaHoy.getDate(),0,0,0,0);
      this._encargueService.actualizarEncargue(encargue).subscribe();
   }
  }
  validar(encargue:Encargue):boolean{
    if(encargue.pago<=0){
        swal("Actualizar","Ingrese el valor del pago","warning");
        return false;
    }
    return true;
  }
  eliminar(encargue:Encargue){
    this._encargueService.eliminarEncargue(encargue).subscribe(()=>this.recargar.emit(true));
  }
}
