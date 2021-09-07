import { Directive, Input } from "@angular/core";
import { AbstractControl, NG_VALIDATORS, Validator } from "@angular/forms";

@Directive({
  selector: '[appMaxNumber]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: MaxNumberValidatorDirective,
    multi: true,
  }]
})

export class MaxNumberValidatorDirective implements Validator {

  @Input('appMaxNumber') maxNumber: number;

  validate(control: AbstractControl): { [key: string]: any } | null {
    return (!isNaN(control.value) && control.value <= this.maxNumber) ?
      null :
      { 'MaxNumber': true }
  }
}
