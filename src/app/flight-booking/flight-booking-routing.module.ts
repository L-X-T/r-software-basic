import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { PassengerSearchComponent } from './passenger-search/passenger-search.component';
import { FlightEditComponent } from './flight-edit/flight-edit.component';
import { BookingHistoryComponent } from './booking-history/booking-history.component';
import { FlightLookaheadComponent } from './flight-lookahead/flight-lookahead.component';

const flightBookingRoutes: Routes = [
  {
    path: 'flight-edit/:id',
    component: FlightEditComponent
  },
  {
    path: 'flight-search',
    component: FlightSearchComponent
  },
  {
    path: 'passenger-search',
    component: PassengerSearchComponent
  },
  {
    path: 'booking-history',
    component: BookingHistoryComponent
  },
  {
    path: 'flight-lookahead',
    component: FlightLookaheadComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(flightBookingRoutes)],
  exports: [RouterModule]
})
export class FlightBookingRoutingModule {}
