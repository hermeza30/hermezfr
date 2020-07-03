import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonaComponent } from './persona/persona.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { GaribaldinaComponent } from './garibaldina/garibaldina.component';
import { BodyComponent } from './body/body.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AgregarClienteComponent } from './agregar-cliente/agregar-cliente/agregar-cliente.component';
import { AgregarProductoComponent } from './agregar-producto/agregar-producto/agregar-producto.component';
import { DetalleMateriaPrimaComponent } from './materia-prima/detalle-materia-prima.component';



@NgModule({
  declarations: [PersonaComponent, BusquedaComponent,GaribaldinaComponent, BodyComponent, AgregarClienteComponent, AgregarProductoComponent, DetalleMateriaPrimaComponent,DetalleMateriaPrimaComponent],
  imports: [
    CommonModule,FormsModule,ReactiveFormsModule,RouterModule 
  ],
  exports:[PersonaComponent,BusquedaComponent,GaribaldinaComponent,BodyComponent,AgregarProductoComponent,AgregarClienteComponent,DetalleMateriaPrimaComponent]
})
export class ComponentsModule { }
