import { Component, Input, OnChanges, OnDestroy, OnInit, Output } from '@angular/core';

import { Flight } from '../../entities/flight';

@Component({
  selector: 'app-flight-card',
  templateUrl: './flight-card.component.html',
  styleUrls: ['./flight-card.component.css']
})
export class FlightCardComponent implements OnInit, OnChanges, OnDestroy {
  debug = false;
  // isInitialized = false;

  @Input({ required: true }) item!: Flight;
  @Input() selected = false;

  constructor() {
    this.debugInputs('constructor');
  }

  ngOnInit(): void {
    // this.init();
    this.debugInputs('ngOnInit');
  }

  ngOnChanges(): void {
    // this.init();
    this.debugInputs('ngOnChanges');
  }

  ngOnDestroy(): void {
    this.debugInputs('ngOnDestroy');
  }

  private debugInputs(hook: string): void {
    if (this.debug) {
      console.warn('[FlightCardComponent - ' + hook + '()]');
      console.log(this.item);
      console.log('selected', this.selected);
    }
  }

  /*private init(): void {
    if (this.isInitialized) {
      return;
    }

    // init

    this.isInitialized = true;
  }*/
}
