import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UsuarioService } from '../../services/usuario/usuario.service';
import { Usuario } from '../../models/usuario.model';
import { SubirArchivoService } from '../../services/service.index';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styles: [],
})
export class PerfilComponent implements OnInit {
  public form: FormGroup;
  public usuario: Usuario;
  public imagen: File;
  public imagenTemp: string;
  constructor(
    public _usuarioService: UsuarioService
  ) {}

  ngOnInit(): void {
    this.usuario = this._usuarioService.usuario;
    this.crearForm();
  }
  crearForm() {
    this.form = new FormGroup({
      nombre: new FormControl({ value: this.usuario.nombre, disabled: true }),
      descripcion: new FormControl({
        value: this.usuario.descripcion,
        disabled: true,
      }),
      img: new FormControl(),
      email: new FormControl({ value: this.usuario.email, disabled: true }),
    });
  }

  seleccionarFoto(archivo: File) {
    if (!archivo) {
      this.imagen = null;
      return;
    }
    if (archivo.type.indexOf('image') < 0) {
      swal(
        'Error',
        'No se puede subir ningun archivo que no sea una imagen',
        'warning'
      );
      this.imagen = null;
      return;
    }
    this.imagen = archivo;
    let reader = new FileReader();

    reader.onloadend=()=>{this.imagenTemp=reader.result as string;}
    reader.readAsDataURL(this.imagen);
  }
  actualizar() {
    this._usuarioService.actualizarImagen('usuarios',this.usuario._id,this.imagen);
  }
}
