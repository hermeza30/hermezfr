import { MateriaPrima } from './materiaprima.model';

export class Compra{
    id:string;
    empresa:string;
    total:number;
    materiaPrima:MateriaPrima[]
    fechaCompra:Date;
    constructor(_empresa:string,_precioTotal:number,_materiaPrima:MateriaPrima[],_id?:string,_fechaCompra?:Date){
        this.empresa=_empresa;
        this.total=_precioTotal;
        this.materiaPrima=_materiaPrima;
        this.id=_id;
        this.fechaCompra=_fechaCompra;
    }
}