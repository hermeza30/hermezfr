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
      nombre:"Pendiente",
      color:"label-pendiente"
    },{
      _id:2,
      nombre:"Cortado",
      color:"label-cortado"

    },{
      _id:3,
      nombre:"Terminado",
      color:"label-terminado"
    },{
      _id:4,
      nombre:"Notificado",
      color:"label-notificado"
    },{
      _id:5,
     nombre:"Entregado",
      color:"label-entregado"
    }];
    return estados;
  }
  getEstado(id:number):Estado{
   let estado:Estado= this.estadoPedidos().find(x=>x._id=id);
   return estado;
  }
 
}
