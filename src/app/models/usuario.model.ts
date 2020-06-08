export class Usuario {
  nombre: string;
  email: string;
  estado: boolean;
  password:string;
  google: boolean;
  role: string;
  id:string;
  constructor(
    _nombre: string,
    _email: string,
    _password?:string,
    _role?: string,
    _estado?: boolean,
    _google?: boolean,
    _id?:string
  ) {
    this.nombre = _nombre;
    this.email = _email;
    this.password=_password;
    this.estado = _estado;
    this.google = _google;
    this.role = _role;
    this.id=_id;
  }
}
