import { Component, OnInit, Input } from '@angular/core';
import { Policia } from 'src/app/models/policia.model';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styles: [
  ]
})
export class ModalComponent implements OnInit {
  
@Input('policia') policia:Policia;
  constructor() { }

  ngOnInit(): void {
  }

}
