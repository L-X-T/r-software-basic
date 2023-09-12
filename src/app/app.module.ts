import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FlightSearchComponent } from './components/flight-search/flight-search.component';
import { FlightLookaheadComponent } from './components/flight-lookahead/flight-lookahead.component';
import { AirportsComponent } from './components/airports/airports.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { AppComponent } from './app.component';

@NgModule({
  imports: [BrowserModule, HttpClientModule, FlightSearchComponent, FlightLookaheadComponent, AirportsComponent, SidebarComponent, NavbarComponent],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
