import { MateriaPrima } from './materiaprima.model';

export class Compra{
    empresa:string;
    total:number;
    materiaPrima:MateriaPrima[]
    constructor(_empresa:string,_precioTotal:number,_materiaPrima:MateriaPrima[]){
        this.empresa=_empresa;
        this.total=_precioTotal;
        this.materiaPrima=_materiaPrima;
    }
}