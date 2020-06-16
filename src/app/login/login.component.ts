import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuarioService } from '../services/usuario/usuario.service';
import { Usuario } from '../models/usuario.model';
import { Router } from '@angular/router';
declare function init_plugins();
declare const gapi:any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public email: string;
  public recuerdame: boolean = false;
  public auth2:any;
  constructor(public _usuarioService: UsuarioService, public router: Router) {}

  ngOnInit(): void {
    init_plugins();
    this.googleInit();
   this.storageEmail();
  }

  googleInit(){
    gapi.load('auth2',()=>{
      this.auth2=gapi.auth2.init({
        client_id:'332237898256-pcm5f0avebm1eav5vpnvje5q92tm7kf3.apps.googleusercontent.com',
        cookiepolicy:'single_host_origin',
        scope:'profile email'
      });
      this.attachSignin(document.getElementById('btnGoogle'));

    });
  }
attachSignin(element){
  this.auth2.attachClickHandler(element,{},(googleUser)=>{
    // let profile=googleUser.getBasicProfile();
    // console.log(profile);
    let token=googleUser.getAuthResponse().id_token;
    this._usuarioService.loginGoogle(token).subscribe(res=>{
     window.location.href="#/dashboard";
    })
  })
}
  storageEmail(){
    this.email=localStorage.getItem('email')||'';
    if(this.email.length>0){
      this.recuerdame=true;
    }
  }
  ingresar(forma: NgForm) {
    let recordar = forma.value.recuerdame;
    let usuario = new Usuario(null, forma.value.email, forma.value.password);
    this._usuarioService.login(usuario, recordar).subscribe((res) => {
        this.router.navigate(['/dashboard'])
    });
  }
}
