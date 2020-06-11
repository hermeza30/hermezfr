import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PoliciaService } from '../../../services/service.index';
import { Policia } from 'src/app/models/policia.model';
import { PedidosService } from '../../../services/service.index';

@Component({
  selector: 'app-agregar-cliente',
  templateUrl: './agregar-cliente.component.html',
  styles: [
  ]
})
export class AgregarClienteComponent implements OnInit {
  public telefono:string="";
  public nombre:string=""
  public policias:Policia[];
  public policia:Policia;
  @Output("persona") emitpersona:EventEmitter<string>=new EventEmitter();
  constructor(public _policiaService:PoliciaService, public _pedidoService:PedidosService) { }

  ngOnInit(): void {
  }
  agregarCliente(p:Policia){
    this.policia=p;
    this.emitpersona.emit(this.policia._id);
  }
  buscar(f:any){
    if(f.nombre.length>0){
      this._policiaService.busquedaGeneral([f.nombre,"nombre"]).subscribe(res=>{
        this.policias=(res.length>0)?res:null});
    }else if(f.telefono.length>0){
      this._policiaService.busquedaGeneral([f.telefono,"telefono"]).subscribe(res=>this.policias=res);
    }else{
      this.policias=null;
      this.policia=null;
    }
  }
 


}
