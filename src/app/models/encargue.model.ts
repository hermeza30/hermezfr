import { Categoria } from './categoria.model';
import { Empleado } from './empleado.model';
export class Encargue {
  public _id: string;
  public empleado: Empleado;
  public categoria: Categoria;
  public fechaDevolucion: Date;
  public fechaEntrega: Date;
  public codigo: string;
  public cantidad: number;
  public pago: number;
  constructor(
    _id: string,
    _empleado: Empleado,
    _categoria: Categoria,
    _fechaDevolucion: Date,
    _fechaEntrega: Date,
    _codigo: string,
    _cantidad: number,
    _pago: number
  ) {
    this._id = _id;
    this.empleado = _empleado;
    this.categoria = _categoria;
    this.fechaDevolucion = _fechaDevolucion;
    this.fechaEntrega = _fechaEntrega;
    this.codigo = _codigo;
    this.cantidad = _cantidad;
    this.pago = _pago;
  }
}
