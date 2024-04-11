import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: 'input[city]',
  providers: [{ provide: NG_VALIDATORS, useExisting: CityValidatorDirective, multi: true }],
  standalone: true
})
export class CityValidatorDirective implements Validator {
  // validCities = ['Graz', 'Wien', 'Hamburg', 'Berlin'];

  @Input({ required: true }) city: string[] = [];

  validate(c: AbstractControl): ValidationErrors | null {
    if (c.value && !this.city.includes(c.value)) {
      return {
        city: {
          actualCity: c.value,
          validCities: this.city.join(', ')
        }
      };
    }

    return null; // no error
  }
}
