import { Injectable } from '@angular/core';
import { Usuario } from '../../models/usuario.model';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICE } from '../../config/config';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Router } from '@angular/router';
import { SubirArchivoService } from '../service.index';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  public token: string = '';
  public usuario: Usuario;
  
  constructor(public http: HttpClient, public router: Router, public _subirArchivo:SubirArchivoService) {
    this.cargarStorage();
  }

  renuevaToken() {
    let url = URL_SERVICE + '/login/renuevatoken';
    url += '/?token=' + this.token;
    return this.http.get(url).pipe(
      map((res: any) => {
        this.token = res.token;
        localStorage.setItem('token', this.token);
        return true;
      }),
      catchError((err: any) => {
        this.router.navigate(['/login']);
        swal(
          'No se pudo renovar token',
          'No es posible renovar token',
          'error'
        );
        return throwError(err);
      })
    );
  }
  loginGoogle(token: string) {
    let url = URL_SERVICE + '/login/google';
    return this.http.post(url, { token }).pipe(
      map((res: any) => {
        this.guardarStorage(res.id, res.token, res.usuarioDB);
        return res;
      })
    );
  }
  logout() {
    this.token = '';
    this.usuario = null;
    localStorage.removeItem('id');
    localStorage.removeItem('token');
    localStorage.removeItem('usuario');
    this.router.navigate(['/login']);
  }
  login(usuario: Usuario, recordar) {
    let url = URL_SERVICE + '/login';
    return this.http.post(url, usuario).pipe(
      map((res: any) => {
        if (recordar) {
          localStorage.setItem('email', usuario.email);
        } else {
          localStorage.removeItem('email');
        }
        this.guardarStorage(res.id, res.token, res.usuarioDB);

        return res.usuarioDB;
      }),
      catchError((err) => {
        swal('Error en el login', err.error.message, 'error');
        return throwError(err);
      })
    );
  }
  guardarStorage(id: string, token: string, usuario: Usuario) {
    this.token = token;
    this.usuario = usuario;
    localStorage.setItem('id', id);
    localStorage.setItem('token', token);
    localStorage.setItem('usuario', JSON.stringify(usuario));
  }
  registrarUsuario(usuario: Usuario) {
    let url = URL_SERVICE + '/usuario';
    return this.http.post(url, usuario).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  estaLogueado() {
    return this.token.length > 0 ? true : false;
  }
  cargarStorage() {
    if (localStorage.getItem('token')) {
      this.token = localStorage.getItem('token');
      this.usuario = JSON.parse(localStorage.getItem('usuario'));
    } else {
      this.token = '';
      this.usuario = null;
    }
  }
  obtenerUsuarioLogueado(){
    return this.usuario;
  }
  actualizarPerfil(usuario:Usuario){
    let url=URL_SERVICE+'/usuario'+'/'+usuario._id+'/?token='+this.token
   return this.http.put(url,usuario).pipe(
      map((res:any)=>{
          return res.usuario;
      }),
      catchError(err=>throwError(err))
    );
  }
  actualizarImagen(tipo:string,id:string,archivo:File){
    this._subirArchivo
    .subirArchivo(archivo, 'usuarios', this.usuario._id)
    .subscribe((res: any) => {
      let objs=JSON.parse(res);
      this.usuario.img=objs.img;
      swal("Imagen actualizada",this.usuario.nombre,"success");
      this.guardarStorage(this.usuario._id,this.token,this.usuario);
    }),
    (err) => {
      swal('Cambiar Imagen', 'Error al cambiar imagen ' + err, 'error');
    };
  }

}
