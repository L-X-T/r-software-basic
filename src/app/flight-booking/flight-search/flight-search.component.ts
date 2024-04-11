import { Component, DestroyRef, inject, OnDestroy, OnInit, signal, ViewChild } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormsModule, NgForm } from '@angular/forms';

import { Flight } from '../../entities/flight';
import { FlightService } from '../../services/flight.service';
import { BehaviorSubject, Observable, Observer, Subscription } from 'rxjs';
import { share } from 'rxjs/operators';
import { PATTERN } from '../../shared/global';
import { CityPipe } from '../../shared/pipes/city.pipe';
import { FlightEditComponent } from '../flight-edit/flight-edit.component';
import { RouterLink } from '@angular/router';
import { FlightStatusToggleComponent } from '../flight-status-toggle/flight-status-toggle.component';
import { FlightCardComponent } from '../flight-card/flight-card.component';
import { CityValidatorDirective } from '../shared/validation/city-validator.directive';
import { FlightValidationErrorsComponent } from '../flight-validation-errors/flight-validation-errors.component';
import { AsyncPipe, DatePipe, JsonPipe, NgFor, NgIf } from '@angular/common';
import { AsyncCityValidatorDirective } from '../shared/validation/async-city-validator.directive';
import { AsyncMultiFieldValidatorDirective } from '../shared/validation/async-multi-field-validator.directive';
import { MultiFieldValidatorDirective } from '../shared/validation/multi-field-validator.directive';

@Component({
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css'],
  standalone: true,
  imports: [
    FormsModule,
    MultiFieldValidatorDirective,
    AsyncMultiFieldValidatorDirective,
    AsyncCityValidatorDirective,
    NgIf,
    FlightValidationErrorsComponent,
    CityValidatorDirective,
    NgFor,
    FlightCardComponent,
    FlightStatusToggleComponent,
    RouterLink,
    FlightEditComponent,
    AsyncPipe,
    JsonPipe,
    DatePipe,
    CityPipe
  ]
})
export class FlightSearchComponent implements OnInit, OnDestroy {
  @ViewChild('flightSearchForm') flightSearchForm?: NgForm;

  from = 'Hamburg';
  to = 'Graz';

  minLength = 3;
  maxLength = 15;

  flights: Flight[] = []; // old school
  flights$?: Observable<Flight[]>; // observable
  flightsSubject = new BehaviorSubject<Flight[]>([]); // subject
  flightsSignal = signal<Flight[]>([]); // signal
  flightsSubscription?: Subscription;
  // private readonly onDestroySubject = new Subject<void>();
  // readonly terminator$ = this.onDestroySubject.asObservable();

  selectedFlight: Flight | null = null;
  flightToEdit: Flight | null = null;
  readonly pattern = PATTERN;

  message = '';

  private readonly destroyRef = inject(DestroyRef);
  private readonly flightService = inject(FlightService);
  // constructor(private flightService: FlightService) {}

  basket: { [id: number]: boolean } = {
    3: true,
    5: true
  };

  ngOnInit(): void {
    if (this.from && this.to) {
      this.onSearch();
    }
  }

  onSearch(): void {
    if (this.flightSearchForm?.invalid) {
      this.markFormGroupDirty(this.flightSearchForm);
      return;
    }

    // 1. my observable
    this.flights$ = this.flightService.find(this.from, this.to).pipe(share());

    // 2. my observer
    const flightsObserver: Observer<Flight[]> = {
      next: (flights) => {
        this.flights = flights;
        this.flightsSubject.next(flights);
        this.flightsSignal.set(flights);
      },
      error: (errResp: HttpErrorResponse) => console.error('Error loading flights', errResp),
      complete: () => {
        // console.debug('Flights loading completed.');
      }
    };

    // 3a. my subscription
    this.flightsSubscription?.unsubscribe();
    this.flightsSubscription = this.flights$.subscribe(flightsObserver);

    // 3b. takeUntil terminator$ emits
    // this.flights$.pipe(takeUntil(this.terminator$)).subscribe(flightsObserver);

    // 3c. takeUntilDestroyed
    this.flights$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(flightsObserver);
  }

  ngOnDestroy(): void {
    // 4a. my unsubscribe
    this.flightsSubscription?.unsubscribe();

    // 4b. subject emit thru terminator$
    // this.onDestroySubject.next(void 0);
    // this.onDestroySubject.complete();

    // complete behavior subject
    this.flightsSubject.complete();
  }

  onSelectToggle(flight: Flight): void {
    this.basket[flight.id] = !this.basket[flight.id];
    this.selectedFlight = this.basket[flight.id] ? flight : null;
  }

  /*onSave(): void {
    if (this.selectedFlight) {
      this.flightService
        .save(this.selectedFlight)
        .pipe(takeUntilDestroyed(this.destroyRef))
        .subscribe({
          next: (flight) => {
            console.log('Flight saved: ', flight);
            this.selectedFlight = flight;
            this.message = 'Success!';
          },
          error: (errResponse: HttpErrorResponse) => {
            console.error('Error saving flight', errResponse);
            this.message = 'Error: ' + errResponse.message;
          }
        });
    }
  }*/

  trackById(index: number, flight: Flight): number {
    return flight.id;
  }

  removeSecondFlight(): void {
    this.flights = [{ ...this.flights[0] }, ...this.flights.slice(2)];
  }

  updateFlight(updatedFlight: Flight): void {
    // console.warn('FlightSearchComponent - updateFlight()');
    // console.log(updatedFlight);

    this.flights = this.flights.map((flight) => (flight.id === updatedFlight.id ? updatedFlight : flight));

    this.onSearch(); // to update the results
  }

  private markFormGroupDirty(formGroup: NgForm): void {
    Object.values(formGroup.controls).forEach((c) => c.markAsDirty());
  }

  delayFirstFlight(): void {
    if (this.flights.length > 0) {
      const ONE_MINUTE = 1000 * 60;
      const firstFlight = this.flights[0];
      const date = new Date(firstFlight.date);
      const newDate = new Date(date.getTime() + 15 * ONE_MINUTE);

      // mutable update
      // firstFlight.date = newDate.toISOString();

      // immutable update flight
      const newFlight = { ...firstFlight, date: newDate.toISOString() };
      this.flights[0] = newFlight;

      // immutable update flights
      // 1. update via map
      // this.flights = this.flights.map((f) => (f.id === firstFlight.id ? newFlight : f));

      // 2. recreate array
      // this.flights = [newFlight, ...this.flights.slice(1)];

      // 3. splice array
      // this.flights.splice(0, 1, newFlight);

      // 4. spreading
      // this.flights = [...this.flights];
    }
  }
}
