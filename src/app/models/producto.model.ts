export class Producto {
  public _id: string;
  public categoria:string;
  public nombre: string;
  public precio: number;
  public descripcion: string;
  public talle: string;
  public cantidad:number;
  public preciocantidad:number;
  constructor(
    _id?: string,
    _categoria?:string,
    _nombre?: string,
    _precio?: number,
    _descripcion?: string,
    _talle?:string,
    _cantidad?:number,
    _preciocantidad?:number
  ) {
    this._id = _id;
    this.categoria=_categoria;
    this.nombre = _nombre;
    this.precio = _precio;
    this.descripcion = _descripcion;
    this.talle = _talle;
    this.cantidad=_cantidad;
    this.preciocantidad=_preciocantidad;
  }
}
