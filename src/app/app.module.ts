import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { CityPipe } from './shared/pipes/city.pipe';
import { AirportsComponent } from './airports/airports.component';
import { FlightLookaheadComponent } from './flight-lookahead/flight-lookahead.component';

@NgModule({
  imports: [BrowserModule, HttpClientModule, FormsModule, ReactiveFormsModule],
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    FlightSearchComponent,
    CityPipe,
    AirportsComponent,
    FlightLookaheadComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
