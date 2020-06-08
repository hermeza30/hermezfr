import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComunicationComponentsService {
  private llamarForm:Subject<boolean>=new Subject();
  public llamarFormAsObs=this.llamarForm.asObservable();
  constructor() { 
    
  }

  public servicioLLamarForm(b:boolean){
    this.llamarForm.next(b);
  }


}
