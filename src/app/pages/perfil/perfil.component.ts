import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {  ActivatedRoute } from '@angular/router';
import { UsuarioService } from '../../services/usuario/usuario.service';
import { Usuario } from '../../models/usuario.model';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styles: [
  ]
})
export class PerfilComponent implements OnInit {
public form:FormGroup;
public usuario:Usuario;
constructor(public _usuarioService:UsuarioService
    ) { 
  }

  ngOnInit(): void {
    this.usuario=this._usuarioService.usuario;
    this.crearForm();
  }
crearForm(){
  this.form=new FormGroup({
    nombre:new FormControl(this.usuario.nombre),
    descripcion:new FormControl(this.usuario.descripcion),
    img:new FormControl(),
    email:new FormControl(this.usuario.email)
  })
}
actualizar(){

}
cambiarFoto(){

}


}
