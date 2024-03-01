import { AsyncMultiFieldValidatorDirective } from './async-multi-field-validator.directive';

import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { FlightService } from '../../../services/flight.service';

describe('AsyncMultiFieldValidatorDirective', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AsyncMultiFieldValidatorDirective, FlightService]
    }).compileComponents();
  });

  it('should create an instance', () => {
    const directive = TestBed.inject(AsyncMultiFieldValidatorDirective);
    expect(directive).toBeTruthy();
  });
});
