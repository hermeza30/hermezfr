import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map}from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class DolarService {

  constructor(public http:HttpClient) { }
  llamarApi(){
    let url='https://www.dolarsi.com/api/api.php?type=valoresprincipales';
    return this.http.get(url).pipe(
      map((res:any)=>{
       return  res.dolar
      }));
  }
}
