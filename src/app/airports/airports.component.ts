import { Component, inject } from '@angular/core';

import { AirportService } from './airport.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-airports',
  templateUrl: './airports.component.html'
})
export class AirportsComponent {
  readonly airports$?: Observable<string[]> = inject(AirportService).findAll();
}
