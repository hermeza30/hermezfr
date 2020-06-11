import { Injectable } from '@angular/core';
import { Estado } from '../../models/estado.model';

@Injectable({
  providedIn: 'root'
})
export class EstadoPedidoService {

  constructor() { }

  public estadoPedidos(){
    let estados:Estado[]=[{
      _id:"1",
      _nombre:"Iniciado"
    },{
      _id:"2",
      _nombre:"Cortado"
    },{
      _id:"3",
      _nombre:"Confeccionado"
    },{
      _id:"4",
      _nombre:"Notificado"
    },{
      _id:"5",
      _nombre:"Entregado"
    }]
  }
}
