import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { FlightLookaheadComponent } from './flight-lookahead/flight-lookahead.component';
import { AirportsComponent } from './airports/airports.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [FlightLookaheadComponent, AirportsComponent],
  exports: [FlightLookaheadComponent, AirportsComponent]
})
export class FlightBookingModule {}
