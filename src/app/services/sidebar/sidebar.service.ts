import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
public menu:any=[{
  titulo:'Principal',
  icono:'mdi mdi-gauge',
  submenu:[
    {titulo:"Buscar",url:'/dashboard'},
    {titulo:"Registrar policia",url:'/policia'},
    {titulo:"Usuarios",url:'/usuario'}

  ]
}]
  constructor() { }
}
