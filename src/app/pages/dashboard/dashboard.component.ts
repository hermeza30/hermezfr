import { Component, OnInit } from '@angular/core';
import { PoliciaService } from '../../services/policia/policia.service';
import { Policia } from 'src/app/models/policia.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: [
  ]
})
export class DashboardComponent implements OnInit {
  public policias:Policia[]=[];
  constructor(public _policiasServices:PoliciaService) { }

  ngOnInit(): void {
    this.cargarPolicias();
  }
  cargarPolicias(){
  this._policiasServices.consultarPolicias().subscribe(res=>{console.log(res);this.policias=res;console.log(this.policias)});
}

}
