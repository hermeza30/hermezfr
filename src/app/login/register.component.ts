import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidatorFn, ValidationErrors } from '@angular/forms';
import swal from 'sweetalert';
import { Usuario } from '../models/usuario.model';
import { UsuarioService } from '../services/usuario/usuario.service';
import { Router } from '@angular/router';

declare function init_plugins();
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./login.component.css'],
})
export class RegisterComponent implements OnInit {
  public form: FormGroup;
  constructor(public _usuarioService:UsuarioService,public router:Router) {}

  ngOnInit(): void {
    init_plugins();
    this.crearForm();
  }
  crearForm() {
    this.form = new FormGroup({
      nombre: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      password2: new FormControl('', Validators.required),
      condiciones: new FormControl(false),
    });
    this.form.setValidators(this.validarPasswords());
  }
  validarPasswords():ValidatorFn{
    return (group:FormGroup):ValidationErrors=>{
      const p1=group.controls['password'];
      const p2=group.controls['password2'];
      if(p1.value!==p2.value){
        p2.setErrors({notEquivalent:true})
      }else{
        p2.setErrors(null);
      }
      return;
    };
  }
  registrando() {
    if(!this.form.valid){
      swal("Registrar usuario", "Los passwords no son iguales verifique.", "warning");
      return;
    }
    let usuario=new Usuario(
      this.form.value.nombre,this.form.value.email,this.form.value.password,"ADMIN_ROLE"
    );

    this._usuarioService.registrarUsuario(usuario).subscribe( (res:Usuario)=>{
      console.log(res);
      swal("Registrar usuario", "Se registro el usuario: "+res.nombre, "success");
      this.router.navigate(['/login']);
    })
  }
}
