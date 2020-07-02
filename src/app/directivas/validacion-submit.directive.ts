import { Directive, HostListener, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Directive({
  selector: '[appValidacionSubmit]'
})
export class ValidacionSubmitDirective {
  @Input() validationControl: FormGroup;
  constructor() { }
  @HostListener('click', ["$event"])
  handleClickEvent(event) {
    this.markAsTouched(this.validationControl);
  }
  private markAsTouched(formGroup: FormGroup): void {
    formGroup.markAsTouched();
    formGroup.updateValueAndValidity();
    (<any>Object).values(formGroup.controls).forEach(
      control => {
        control.markAsTouched();
        control.updateValueAndValidity({ onlySelf: false, emitEvent: true });
        if (control.controls) {
          this.markAsTouched(control);
        }
      });
  }

}
