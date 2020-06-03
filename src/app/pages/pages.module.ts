import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { UsuarioComponent } from './usuario/usuario.component';
import { PoliciaComponent } from './policia/policia.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PAGES_ROUTES } from './pages.routes';

import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { PagesComponent } from './pages.component';
import { ComponentsModule } from '../components/components.module';


@NgModule({
  declarations: [UsuarioComponent, PoliciaComponent, DashboardComponent,PagesComponent],
  imports: [
    CommonModule,
    SharedModule,
    PAGES_ROUTES,
    FormsModule,
    ReactiveFormsModule,
    ComponentsModule,

  ],
  exports:[UsuarioComponent,PoliciaComponent,DashboardComponent,PagesComponent]
})
export class PagesModule { }
