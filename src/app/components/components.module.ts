import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonaComponent } from './persona/persona.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { GaribaldinaComponent } from './garibaldina/garibaldina.component';
import { BodyComponent } from './body/body.component';



@NgModule({
  declarations: [PersonaComponent, BusquedaComponent,GaribaldinaComponent, BodyComponent],
  imports: [
    CommonModule,
  ],
  exports:[PersonaComponent,BusquedaComponent,GaribaldinaComponent,BodyComponent]
})
export class ComponentsModule { }
