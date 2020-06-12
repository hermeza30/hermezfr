export class Categoria {
    public _id: string;
    public nombre: string;
    public precio: number;
    public descripcion: string;
    constructor(
      _id: string,
      _nombre: string,
      _precio: number,
      _descripcion?: string,
    ) {
      this._id = _id;
      this.nombre = _nombre;
      this.precio = _precio;
      this.descripcion = _descripcion;
    }
  }
  