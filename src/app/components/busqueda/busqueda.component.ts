import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [
  ]
})
export class BusquedaComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit(): void {
  }
  irAcrear(){
    this.router.navigate(['/policia']);
  }
}
