import {AbstractControl, ValidationErrors} from "@angular/forms";

export class CustomValidators {
  static phoneValidator(control: AbstractControl): ValidationErrors | null {
    const result  = /^\+?\d{11}$/.test(control.value);
    return result ? null : {phone: {value: control.value}};
  }
}
