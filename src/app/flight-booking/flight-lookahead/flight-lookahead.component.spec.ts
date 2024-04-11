import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { FlightLookaheadComponent } from './flight-lookahead.component';

describe('FlightLookaheadComponent', () => {
  let component: FlightLookaheadComponent;
  let fixture: ComponentFixture<FlightLookaheadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, ReactiveFormsModule, FlightLookaheadComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(FlightLookaheadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
