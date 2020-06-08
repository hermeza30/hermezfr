export class  Persona{
public nombre:string;
public telefono:string;
public cuil:string;
public direccion:string;
constructor(
_nombre:string,
_telefono:string,
_cuil?:string,
_direccion?:string
){
    this.nombre=_nombre;
    this.telefono=_telefono;
    this.cuil=_cuil;
    this.direccion=_direccion;
}
}