import { Categoria } from './categoria.model';
import { Estado } from './estado.model';
export class Producto {
  public _id: string;
  public categoria:Categoria;
  public nombre: string;
  public descripcion: string;
  public talle: string;
  public cantidad:number;
  public preciocantidad:number;
  public estado:Estado;
  constructor(
    _id?: string,
    _categoria?:Categoria,
    _nombre?: string,
    _descripcion?: string,
    _talle?:string,
    _cantidad?:number,
    _preciocantidad?:number,
    _estado?:Estado
  ) {
    this._id = _id;
    this.categoria=_categoria;
    this.nombre = _nombre;
    this.descripcion = _descripcion;
    this.talle = _talle;
    this.cantidad=_cantidad;
    this.preciocantidad=_preciocantidad;
    this.estado=_estado;
  }
}
