
export class Estado {
    public _id:number;
    public nombre: string;
    public color:string;
    constructor(
      _id: number,
      _nombre?:string,
      _color?:string
      
    ) {
      this._id = _id;
      this.nombre = _nombre;
      this.color = _color;
    }
  }