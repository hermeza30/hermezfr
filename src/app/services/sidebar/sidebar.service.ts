import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
public menu:any=[{
  titulo:'Policías',
  icono:'mdi mdi-checkbox-blank-circle',
  src:'assets/images/users/policia-fa.jpg',
  submenu:[
    {titulo:"Buscar",url:'/dashboard'},
    {titulo:"Registrar",url:'/policia'},

  ]
},{
  titulo:'Pedidos',
  icono:'mdi mdi-plus-circle-outline',
  submenu:[
    {titulo:"Buscar",url:'/dashboard'},
    {titulo:"Registrar",url:'/policia'},

  ]
}]
  constructor() { }
}
