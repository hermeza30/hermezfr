import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
public menu:any=[{
  titulo:'Policías',
  icono:'mdi mdi-plus-circle-outline',
  src:'assets/images/users/policia-fa.jpg',
  submenu:[
    {titulo:"Buscar",url:'/dashboard'},
    {titulo:"Registrar",url:'/policia'},

  ]
},{
  titulo:'Pedidos',
  icono:'mdi mdi-plus-circle-outline',
  submenu:[
    {titulo:"Buscar",url:'/buscar-pedido'},
    {titulo:"Registrar",url:'/pedido'},

  ]
},{
  titulo:'Productos',
  icono:'mdi mdi-plus-circle-outline',
  submenu:[
    {titulo:"Producto",url:'/categoria'}
  ]
},{
  titulo:'Compra',
  icono:'mdi mdi-plus-circle-outline',
  submenu:[
    {titulo:"Compra",url:'/materia-prima'}
  ]
},{
  titulo:'Encargue',
  icono:'mdi mdi-plus-circle-outline',
  submenu:[
    {titulo:"Encargue",url:'/encargue'}
  ]
}]
  constructor() { }
}
