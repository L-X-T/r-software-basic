import { AsyncCityValidatorDirective } from './async-city-validator.directive';

import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { FlightService } from '../../../services/flight.service';

describe('AsyncCityValidatorDirective', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AsyncCityValidatorDirective, FlightService]
    }).compileComponents();
  });

  it('should create an instance', () => {
    const directive = TestBed.inject(AsyncCityValidatorDirective);
    expect(directive).toBeTruthy();
  });
});
