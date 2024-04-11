import { Component, DestroyRef, EventEmitter, inject, Input, OnChanges, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { debounceTime, distinctUntilChanged } from 'rxjs';

import { Flight } from '../../entities/flight';
import { FlightService } from '../../services/flight.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { validateCity } from '../shared/validation/city-validator';
import { validateAsyncCity } from '../shared/validation/async-city-validator';
import { validateRoundTrip } from '../shared/validation/round-trip-validator';
import { PATTERN } from '../../shared/global';

@Component({
  selector: 'app-flight-edit',
  templateUrl: './flight-edit.component.html',
  styleUrls: ['./flight-edit.component.css']
})
export class FlightEditComponent implements OnChanges {
  @Input() flight?: Flight | null;
  @Output() flightChange = new EventEmitter<Flight>();

  private readonly destroyRef = inject(DestroyRef);
  private readonly flightService = inject(FlightService);
  private readonly pattern = PATTERN;

  editForm: FormGroup = inject(FormBuilder).group(
    {
      // array shorthand (type number inferred from initial value) with validators as array
      id: [0, [Validators.required, Validators.min(0)]],
      // array shorthand (type string inferred from initial value) with async validator
      from: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(15),
          Validators.pattern(this.pattern),
          validateCity(['Graz', 'Wien', 'Hamburg', 'Berlin'])
        ],
        validateAsyncCity(this.flightService)
      ],
      // array shorthand with update on (needs options object as 2nd item)
      to: [
        '',
        {
          validators: [
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(15),
            Validators.pattern(this.pattern),
            validateCity(['Graz', 'Wien', 'Hamburg', 'Berlin'])
          ],
          updateOn: 'blur'
        }
      ],
      // FormControl instead of array shorthand, type string inferred from initial value
      date: new FormControl('', {
        validators: [Validators.required, Validators.minLength(33), Validators.maxLength(33)],
        updateOn: 'blur'
      })
    },
    {
      validators: validateRoundTrip
    }
  );

  message = '';

  private readonly valueChangesLogger = this.editForm.valueChanges
    .pipe(
      debounceTime(250),
      distinctUntilChanged((a, b) => a.id === b.id && a.from === b.from && a.to === b.to && a.date === b.date),
      takeUntilDestroyed()
    )
    .subscribe((value) => {
      console.log(value);
    });

  ngOnChanges(): void {
    if (this.flight) {
      this.editForm.patchValue(this.flight);
    }
  }

  save(): void {
    this.flightService
      .save(this.editForm.value)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (flight) => {
          console.log('saved flight:', flight);

          this.flightChange.emit(flight);

          this.message = 'Success!';
        },
        error: (err: HttpErrorResponse) => {
          console.error('Error', err);
          this.message = 'Error!';
        }
      });
  }
}
