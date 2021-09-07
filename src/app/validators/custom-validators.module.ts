import { MinNumberValidatorDirective } from './min-number.directive';
import { NgModule } from "@angular/core";
import { MaxNumberValidatorDirective } from "./max-number.directive";

@NgModule({
  declarations: [
    MaxNumberValidatorDirective,
    MinNumberValidatorDirective,
  ],
  exports: [
    MaxNumberValidatorDirective,
    MinNumberValidatorDirective,
  ]
})

export class CustomValidatorsModule { }

