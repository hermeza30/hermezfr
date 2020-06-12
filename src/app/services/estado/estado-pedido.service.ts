import { Injectable } from '@angular/core';
import { Estado } from '../../models/estado.model';

@Injectable({
  providedIn: 'root'
})
export class EstadoPedidoService {

  constructor() { }

  public estadoPedidos(){
    let estados:Estado[]=[{
      _id:1,
      nombre:"Iniciado",
      color:"label-iniciado"
    },{
      _id:2,
      nombre:"terminado",
      color:"label-terminado"

    },{
      _id:3,
      nombre:"notificado",
      color:"label-notificado"
    },{
      _id:4,
      nombre:"Entregado",
      color:"label-entregado"
    },{
      _id:5,
     nombre:"Cortado",
      color:"label-cortado"
    }];
    return estados;
  }
  getEstado(id:number):Estado{
   let estado:Estado= this.estadoPedidos().find(x=>x._id=id);
   return estado;
  }
 
}
