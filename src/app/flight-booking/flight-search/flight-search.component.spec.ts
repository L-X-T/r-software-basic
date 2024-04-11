import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { FlightBookingModule } from '../flight-booking.module';
import { SharedModule } from '../../shared/shared.module';

import { FlightSearchComponent } from './flight-search.component';

describe('Unit test: flight-search.component', () => {
  let component: FlightSearchComponent;
  let fixture: ComponentFixture<FlightSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule, FlightBookingModule, SharedModule],
      providers: [
        // Add Providers if you need them for your tests
      ]
    });

    fixture = TestBed.createComponent(FlightSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should not have any flights loaded initially', () => {
    expect(component.flights.length).toBe(0);
  });

  it('should load flights when user entered from and to', () => {
    component.from = 'Graz';
    component.to = 'Hamburg';
    component.onSearch();

    const httpTestingController = TestBed.inject(HttpTestingController);
    const req = httpTestingController.expectOne('http://www.angular.at/api/flight?from=Graz&to=Hamburg');
    // req.request.method === 'GET'

    req.flush([
      {
        id: 22,
        from: 'Graz',
        to: 'Hamburg',
        date: ''
      }
    ]);

    expect(component.flights.length).toBe(1);
  });
});
