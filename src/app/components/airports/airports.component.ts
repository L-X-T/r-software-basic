import { Component, inject } from '@angular/core';
import { AsyncPipe, NgForOf } from '@angular/common';

import { Observable } from 'rxjs';

import { AirportService } from '../../services/airport.service';

@Component({
  selector: 'app-airports',
  standalone: true,
  imports: [AsyncPipe, NgForOf],
  templateUrl: './airports.component.html'
})
export class AirportsComponent {
  readonly airports$?: Observable<string[]> = inject(AirportService).findAll();
}
