import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from './header/header.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { PipesModule } from '../pipes/pipes.module';



@NgModule({
  declarations: [BreadcrumbsComponent,HeaderComponent,NopagefoundComponent,SidebarComponent],
  imports: [
    CommonModule,
    RouterModule,
    PipesModule
  ],
  exports:[BreadcrumbsComponent,HeaderComponent,NopagefoundComponent,SidebarComponent]
})
export class SharedModule { }
