export class Producto {
  public _id: string;
  public categoria:string;
  public nombre: string;
  public precio: string;
  public descripcion: string;
  public talle: string;
  constructor(
    _id?: string,
    _categoria?:string,
    _nombre?: string,
    _precio?: string,
    _descripcion?: string,
    _talle?:string
  ) {
    this._id = _id;
    this.categoria=_categoria;
    this.nombre = _nombre;
    this.precio = _precio;
    this.descripcion = _descripcion;
    this.talle = _talle;
  }
}
