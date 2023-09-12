import { Component } from '@angular/core';
import { FlightSearchComponent } from './components/flight-search/flight-search.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AirportsComponent } from './components/airports/airports.component';
import { FlightLookaheadComponent } from './components/flight-lookahead/flight-lookahead.component';

@Component({
  standalone: true,
  imports: [FlightSearchComponent, SidebarComponent, NavbarComponent, AirportsComponent, FlightLookaheadComponent],
  selector: 'app-flight-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello World!';
}
