import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidacionFormService {
  constructor() { }
  private errorMensajes={
    'nombre':"El nombre es requerido.",
    'email':"El mail es requerido.",
    'precio':'El precio es requerido',
    'descripcion':'La descripcion es requerida'

  }
  
  getValidaciones(validationId:string){
    return this.errorMensajes[validationId]
  }
}
