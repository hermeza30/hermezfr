import { Component, OnInit } from '@angular/core';
import { Policia } from '../../models/policia.model';
import { PoliciaService } from '../../services/policia/policia.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-ver-policia',
  templateUrl: './ver-policia.component.html',
  styles: [
  ]
})
export class VerPoliciaComponent implements OnInit {
  public policia: Policia;
  public ver:boolean=true;
  public id:string;
  constructor(public _policiaService: PoliciaService,
    public route: ActivatedRoute,public router:Router) { 
      this.id = this.route.snapshot.params['id'];
      this.buscarPolicia();
    }

  ngOnInit(): void {
  }
  buscarPolicia() {
    this._policiaService.cargarPolicia(this.id).subscribe((policia) => {
      this.policia=policia;
    });
  }
  volver(){
    this.router.navigate(['/dashboard']);
  }
}
