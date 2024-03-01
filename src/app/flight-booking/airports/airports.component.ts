import { Component, inject } from '@angular/core';

import { Observable } from 'rxjs';

import { AirportService } from '../../services/airport.service';

@Component({
  selector: 'app-airports',
  templateUrl: './airports.component.html'
})
export class AirportsComponent {
  readonly airports$?: Observable<string[]> = inject(AirportService).findAll();
}
