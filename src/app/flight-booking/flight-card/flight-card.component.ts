import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output } from '@angular/core';

import { Flight } from '../../entities/flight';

@Component({
  selector: 'app-flight-card',
  templateUrl: './flight-card.component.html',
  styleUrls: ['./flight-card.component.css']
})
export class FlightCardComponent implements OnInit, OnChanges, OnDestroy {
  debug = true;

  @Input({ required: true }) item!: Flight;
  @Input() selected = false;
  @Output() selectedChange = new EventEmitter<boolean>();

  constructor() {
    if (this.debug) {
      console.warn('[FlightCardComponent - constructor()]');
      console.log(this.item);
      console.log('selected', this.selected);
    }
  }

  ngOnChanges(): void {
    if (this.debug) {
      console.warn('[FlightCardComponent - ngOnChanges()]');
      console.log(this.item);
      console.log('selected', this.selected);
    }
  }

  ngOnInit(): void {
    if (this.debug) {
      console.warn('[FlightCardComponent - ngOnInit()]');
      console.log(this.item);
      console.log('selected', this.selected);
    }
  }

  ngOnDestroy() {
    if (this.debug) {
      console.warn('[FlightCardComponent - ngOnDestroy()]');
      console.log(this.item);
      console.log('selected', this.selected);
    }
  }

  onSelect(): void {
    this.selected = true;
    if (this.debug) {
      console.warn('[FlightCardComponent - select()]');
      console.log('selected', true);
    }
    this.selectedChange.emit(true);
  }

  onDeselect(): void {
    this.selected = false;
    if (this.debug) {
      console.warn('[FlightCardComponent - deselect()]');
      console.log('selected', false);
    }
    this.selectedChange.emit(false);
  }
}
