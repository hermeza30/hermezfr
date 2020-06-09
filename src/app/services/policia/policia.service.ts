import { Injectable } from '@angular/core';
import { map, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICE } from '../../config/config';
import { throwError, Observable } from 'rxjs';
import { Policia } from '../../models/policia.model';
import { UsuarioService } from '../service.index';
@Injectable({
  providedIn: 'root',
})
export class PoliciaService {
  constructor(
    public http: HttpClient,
    public _usuarioService: UsuarioService
  ) {}

  public consultarPolicias() {
    let url = URL_SERVICE + '/policia';
    return this.http.get(url).pipe(
      map((res: any) => {
        return res.policia;
      }),
      catchError((err) => {
        swal('Error al registrar policía.', err.error.message, 'error');
        return throwError(err);
      })
    );
  }
  public registrarPolicia(policia: Policia) {
    let url = URL_SERVICE + '/policia';
    url += '/?token=' + this._usuarioService.token;
    return this.http.post(url, { policia }).pipe(
      map((res: any) => {
        swal(
          'Se registró correctamente la policía: ',
          res.policia.nombre,
          'success'
        );

        return res.policia;
      }),

      catchError((err) => {
        swal('Error al registrar policia: ', err.error.err.message, 'error');
        return throwError(err);
      })
    );
  }
  public cargarPolicia(id) {
    let url = URL_SERVICE + '/policia/' + id;
    return this.http.get(url).pipe(
      map((res: any) => {
        return res.policia;
      })
    );
  }

  public actualizarPolicia(id:string,policia:Policia){
    let url = URL_SERVICE + '/policia/' + id;
    url+="/?token="+this._usuarioService.token;
    return this.http.put(url,policia).pipe(
      map((res: any) => {
        swal('Se actualizó con éxito el policía',policia.nombre,"success");
        return res.policia;
      }),
      catchError(err=>{
        swal('Error al modificar policía: ', err.error.err.message, 'error');
        return throwError(err)})
    );
  }
  public eliminarPolicia(id:string){
    let url = URL_SERVICE + '/policia/' + id;
    url+="/?token="+this._usuarioService.token;
    return this.http.delete(url).pipe(
      map((res: any) => {
        swal('Se actualizó con éxito el estado del policía.',res.policia.nombre,"success");
        return res.policia;
      }),
      catchError(err=>{
        swal('Error al modificar policía: ', err.error.err.message, 'error');
        return throwError(err)})
    );
  }
  public busquedaGeneral(param:[string,string]){
    let url=URL_SERVICE+'/policia/'+param[1]+'/'+param[0];
    return this.http.get(url).pipe(
      map((res:any)=>{
        return res.policia;
      })
      ,catchError(err=>{return throwError(err)})
    )
  }
}
