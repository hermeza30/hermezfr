export class MateriaPrima{
    public precio:number;
    public descripcion:string[];
    constructor(_precio:number,_desc:string[]){
        this.precio=_precio;
        this.descripcion=_desc;
    }
}