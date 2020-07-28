import { Pipe, PipeTransform } from '@angular/core';
import { URL_SERVICE } from '../config/config';
import { UsuarioService } from '../services/service.index';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {
constructor(public _usuarioService:UsuarioService){

}
  transform(imagen:string,tipo:string="usuarios"): any {
   let url=URL_SERVICE+'/imagen/';

   switch(tipo){
     case 'usuarios':
       url+=`${tipo}`+`/${imagen}`+"?token="+this._usuarioService.token;
     break;
     case 'productos':
      url+=`${tipo}`+`/${imagen}`+"?token="+this._usuarioService.token;
     break;
     default:
       url+='/uploads/notfound/noimagen.jpg'+"?token="+this._usuarioService.token;
   }
   return url;
  }

}
