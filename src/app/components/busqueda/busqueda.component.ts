import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Policia } from '../../models/policia.model';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [
  ]
})
export class BusquedaComponent implements OnInit {
  @Input('policias') policias:Policia[];
  constructor(public router:Router) { }

  ngOnInit(): void {
  }
  irAcrear(){
    this.router.navigate(['/policia']);
  }

}
