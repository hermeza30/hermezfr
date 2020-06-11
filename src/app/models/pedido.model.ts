import { Producto } from './producto.model';
import { Policia } from './policia.model';

export class Pedido {
    public _id:string;
    public prductos: Producto[];
    public policia: string;
    public estado:string;
    public total:number;
    public descripcion: string;
    public fechaPedido:Date;
    public fechaProbableEntrega:Date;
    public fechaRealEntrega:Date;
    constructor(
      _id: string,
      _prductos: Producto[],
      _policia: string,
      _estado:string,
      _total:number,
      _fechaPedido:Date,
      _fechaProbableEntrega?:Date,
      _fechaRealEntrega?:Date,
      _descripcion?: string,
      
    ) {
      this._id=_id;
      this.prductos=_prductos;
      this.policia=_policia;
      this.estado=_estado;
      this.total=_total;
      this.fechaPedido=_fechaPedido;
      this.fechaProbableEntrega=_fechaProbableEntrega;
      this.fechaRealEntrega=_fechaRealEntrega;
      this.descripcion=_descripcion;
    }
  }