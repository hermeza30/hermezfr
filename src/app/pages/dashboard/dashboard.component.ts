import { Component, OnInit } from '@angular/core';
import { PoliciaService } from '../../services/policia/policia.service';
import { Policia } from 'src/app/models/policia.model';
import { Subscription } from 'rxjs';
import { ComunicationComponentsService } from '../../services/comunicationComponents/comunication-components.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: [
  ]
})
export class DashboardComponent implements OnInit {
  public policias:Policia[]=[];
  public total:number=0;

  constructor(public _policiasServices:PoliciaService, public _comunicacion:ComunicationComponentsService) {
 
   }

  ngOnInit(): void {
    this.cargarPolicias(null);
  }
  cargarPolicias(event:[boolean,number]){
    let desde=event?event[1]:0;
    this._policiasServices.consultarPolicias(desde).subscribe(res=>{
    this.total=res.total;
    this.subscribirseTotal(this.total);
    this.policias=res.policia;});
}
busquedaGeneral(key:[string,string]){
  if(key[0].length>0){
    this._policiasServices.busquedaGeneral(key).subscribe(res=>{
      this.policias=res;
    });
  }else{
    this.cargarPolicias(null);
  }
}
subscribirseTotal(n:number){
  this._comunicacion.pasarTotal(n);
}



}
