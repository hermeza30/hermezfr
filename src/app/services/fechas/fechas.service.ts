import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FechasService {

  constructor() { }
  construirFecha(fecha:any):Date{
    if(typeof fecha==="string" ){
      let res = fecha.split('-');
      let anio = +res[0];
      let mes = +res[1];
      let dia = +res[2];
      let nd = new Date(anio, mes-1, dia);
      return  nd;
    }
    return new Date(fecha.getFullYear(),fecha.getMonth(),fecha.getDate(),null,null,null,null);
  }
}
