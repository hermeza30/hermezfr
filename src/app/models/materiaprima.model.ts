export class MateriaPrima{
    public nombre:string;
    public precio:number;
    public descripcion:string;
    public empresa:string;
    constructor(_nombre:string,_precio:number,_desc:string,_empr:string){
        this.nombre=_nombre;
        this.precio=_precio;
        this.descripcion=_desc;
        this.empresa=_empr;
    }
}