export class Usuario {
  nombre: string;
  email: string;
  estado: boolean;
  password:string;
  google: boolean;
  role: string;
  _id:string;
  img:string;
  descripcion:string;
  constructor(
    _nombre: string,
    _email: string,
    _password?:string,
    _role?: string,
    _estado?: boolean,
    _google?: boolean,
    _id?:string,
    _img?:string,
    _descripcion?:string
  ) {
    this.nombre = _nombre;
    this.email = _email;
    this.password=_password;
    this.estado = _estado;
    this.google = _google;
    this.role = _role;
    this._id=_id;
    this.img=_img;
    this.descripcion=_descripcion;
  }
}
