import { Directive, OnInit, ElementRef, Input, HostListener, OnDestroy } from '@angular/core';
import { ValidacionFormService } from '../services/service.index';
import { NgControl, ValidationErrors } from '@angular/forms';
import { Subscription } from 'rxjs';

@Directive({
  selector: '[appValidacion]'
})
export class ValidacionDirective implements OnInit, OnDestroy{
@Input('validacionid') validacionId:string;
public statusChangesDescription:Subscription;
public errorSpanId=''; 

constructor(private elmRef:ElementRef,private validacionService:ValidacionFormService, private control:NgControl) {
 }
ngOnInit(): void {
  this.errorSpanId = this.validacionId+ new Date() + '-error-msg';

  this.statusChangesDescription = this.control.statusChanges.subscribe(
    (status) => {
      if (status == 'INVALID') {
        this.showError();
      } else {
        this.removeError();
      }
    }
  )
}
  
  ngOnDestroy(): void {
    this.statusChangesDescription.unsubscribe();
  }
  @HostListener('blur', ["$event"])
  handleBlurEvent(event) {
    //This is needed to handle the case of clicking a required field and moving out.
    //Rest all are handled by status change subscription

    if (this.control.value == null || this.control.value == '') {
      if (this.control.errors) this.showError();
      else this.removeError();
    }
  }
  private removeError(): void {
    const errorElement = document.getElementById(this.errorSpanId);
    if (errorElement) errorElement.remove();
  }
  private showError() {
    this.removeError();
    const valErrors: ValidationErrors = this.control.errors;
    const firstKey = Object.keys(valErrors)[0];
    const errorMsgKey = this.validacionId;
    const errorMsg = this.validacionService.getValidaciones(errorMsgKey);
    const errSpan = '<span style="color:red;" id="' + this.errorSpanId + '">' + errorMsg + '</span>';
    this.elmRef.nativeElement.parentElement.insertAdjacentHTML('beforeend', errSpan);
  }

}
