import { Routes } from '@angular/router';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { PassengerSearchComponent } from './passenger-search/passenger-search.component';
import { FlightEditComponent } from './flight-edit/flight-edit.component';
import { FlightLookaheadComponent } from './flight-lookahead/flight-lookahead.component';

const flightBookingRoutes: Routes = [
  {
    path: '',
    redirectTo: 'flight-search',
    pathMatch: 'full'
  },
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
    path: 'flight-lookahead',
    component: FlightLookaheadComponent
  }
];

export default flightBookingRoutes;
