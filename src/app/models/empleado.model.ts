export class Empleado{
    public _id:string;
    public nombre:string;
    public direccion:string;
    public telefono:string;

    constructor(_id:string,_nombre?:string,_direccion?:string,_telefono?:string){
        this._id=_id;    
        this.nombre=_nombre;
        this.direccion=_direccion;
        this.telefono=_telefono;
    }
}