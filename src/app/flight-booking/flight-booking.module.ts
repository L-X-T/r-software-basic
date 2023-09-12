import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { FlightLookaheadComponent } from './flight-lookahead/flight-lookahead.component';
import { AirportsComponent } from './airports/airports.component';

@NgModule({
  imports: [SharedModule],
  declarations: [FlightLookaheadComponent, AirportsComponent],
  exports: [SharedModule, FlightLookaheadComponent, AirportsComponent]
})
export class FlightBookingModule {}
