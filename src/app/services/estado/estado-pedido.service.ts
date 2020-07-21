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
      nombre:"Terminado",
      color:"label-terminado"
    },{
      _id:3,
      nombre:"Notificado",
      color:"label-notificado"
    },{
      _id:4,
     nombre:"Entregado",
      color:"label-entregado"
    }];
    return estados;
  }
 public  estadoProducto(){
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
    }];
    return estados;
  }
  public estadoEncargue(){
    let estados:Estado[]=[{
      _id:1,
      nombre:"Entregado",
      color:"label-pendiente"
    },{
      _id:2,
      nombre:"Devuelvo",
      color:"label-terminado"
    }];
    return estados;
  }
  getEstadoProducto(id:number){
    let estado:Estado= this.estadoProducto().find(x=>x._id==id);
    return estado;
  }
  getEstado(id:number):Estado{
   let estado:Estado= this.estadoPedidos().find(x=>x._id==id);
   return estado;
  }
  getEstadoProductoByString(nombre:string):Estado{
    let estado:Estado= this.estadoProducto().find(x=>x.nombre==nombre);
    return estado;
  }
  getEstadoPedidoByString(nombre:string):Estado{
    let estado:Estado= this.estadoPedidos().find(x=>x.nombre==nombre);
    return estado;
  }
  getEstadoEncargue(id:number){
    let estado:Estado= this.estadoEncargue().find(x=>x._id==id);
    return estado;
  }

 
}
