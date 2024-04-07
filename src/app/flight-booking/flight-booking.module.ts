import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { FlightSearchComponent } from './flight-search/flight-search.component';
import { FlightLookaheadComponent } from './flight-lookahead/flight-lookahead.component';
import { AirportsComponent } from './airports/airports.component';

@NgModule({
  imports: [SharedModule],
  declarations: [FlightSearchComponent, FlightLookaheadComponent, AirportsComponent],
  exports: [SharedModule, FlightSearchComponent, FlightLookaheadComponent, AirportsComponent]
})
export class FlightBookingModule {}
