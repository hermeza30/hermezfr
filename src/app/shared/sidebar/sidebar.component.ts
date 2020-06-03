import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../../services/sidebar/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent implements OnInit {
  public sidebar:SidebarService;
  constructor(public _sidebarService:SidebarService) {
    this.sidebar=_sidebarService;
   }

  ngOnInit(): void {
  }
  salir(){
    
  }

}
