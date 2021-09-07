import { Directive, Input } from "@angular/core";
import { AbstractControl, NG_VALIDATORS, Validator } from "@angular/forms";

@Directive({
  selector: '[appMinNumber]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: MinNumberValidatorDirective,
    multi: true,
  }]
})

export class MinNumberValidatorDirective implements Validator {

  @Input('appMinNumber') minNumber: number;

  validate(control: AbstractControl): { [key: string]: any } | null {
    return (!isNaN(control.value) && control.value >= this.minNumber) ?
      null :
      { 'MinNumber': true }
  }
}
