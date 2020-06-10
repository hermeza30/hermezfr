import { Producto } from './producto.model';
import { Policia } from './policia.model';

export class Pedido {
    public _id:string;
    public prductos: Producto[];
    public policia: Policia;
    public descripcion: string;
    constructor(
      _id: string,
      _prductos: Producto[],
      _policia: Policia,
      _descripcion?: string,
    ) {
      this._id = _id;
      this.prductos = _prductos;
      this.policia = _policia;
      this.descripcion = _descripcion;
    }
  }