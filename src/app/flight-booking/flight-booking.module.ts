import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { FlightSearchComponent } from './flight-search/flight-search.component';
import { FlightLookaheadComponent } from './flight-lookahead/flight-lookahead.component';
import { AirportsComponent } from './airports/airports.component';
import { FlightCardComponent } from './flight-card/flight-card.component';
import { FlightStatusToggleComponent } from './flight-status-toggle/flight-status-toggle.component';
import { FlightValidationErrorsComponent } from './flight-validation-errors/flight-validation-errors.component';
import { CityValidatorDirective } from './shared/validation/city-validator.directive';

@NgModule({
  imports: [SharedModule],
  declarations: [
    FlightSearchComponent,
    FlightLookaheadComponent,
    AirportsComponent,
    FlightCardComponent,
    FlightStatusToggleComponent,
    FlightValidationErrorsComponent,
    CityValidatorDirective
  ],
  exports: [SharedModule, FlightSearchComponent, FlightLookaheadComponent, AirportsComponent]
})
export class FlightBookingModule {}
