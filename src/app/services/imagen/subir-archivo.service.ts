import { Injectable } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import { URL_SERVICE } from '../../config/config';

@Injectable({
  providedIn: 'root'
})
export class SubirArchivoService {

  constructor() { }

  subirArchivo(archivo:File,tipo:string,id:string):Observable<any>{

      return new Observable((observer:Subscriber<any>)=>{
        let formData=new FormData();
        let xhr=new XMLHttpRequest();
        let url=URL_SERVICE+'/upload/'+tipo+'/'+id;
        formData.append('archivo',archivo,archivo.name);
        xhr.onreadystatechange=function(){

          if(xhr.readyState==4){
            if(xhr.status==200){
                observer.next(xhr.response);
            }else{
              
              observer.error(xhr.response);
            }
          }
        };
        xhr.open('PUT',url,true);
        xhr.send(formData);
      });


  }
}
