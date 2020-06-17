import { Producto } from './producto.model';
import { Policia } from './policia.model';
import { Estado } from './estado.model';

export class Pedido {
    public _id:string;
    public productos: Producto[];
    public policia: Policia;
    public estado:Estado;
    public total:number;
    public descripcion: string;
    public fechaPedido:Date;
    public fechaProbableEntrega:Date;
    public fechaRealEntrega:Date;
    public senia:number;
    constructor(
      _id: string,
      _prductos: Producto[],
      _policia: Policia,
      _estado:Estado,
      _total:number,
      _fechaPedido:Date,
      _fechaProbableEntrega?:Date,
      _fechaRealEntrega?:Date,
      _descripcion?: string,
      _senia?:number
    ) {
      this._id=_id;
      this.productos=_prductos;
      this.policia=_policia||new Policia('','','','','','');
      this.estado=_estado;
      this.total=_total;
      this.fechaPedido=_fechaPedido;
      this.fechaProbableEntrega=_fechaProbableEntrega;
      this.fechaRealEntrega=_fechaRealEntrega;
      this.descripcion=_descripcion;
      this.senia=_senia;
    }
  }