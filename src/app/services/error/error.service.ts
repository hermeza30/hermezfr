import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {
  public error:string="";
  constructor() {

   }
   mostrarError(){
    this.error="error";
   }
   ocultarError(){
     this.error="";
  }

}
