import { Component, inject } from '@angular/core';

import { AirportService } from '../../services/airport.service';
import { Observable } from 'rxjs';
import { AsyncPipe, CommonModule, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CityPipe } from '../../pipes/city.pipe';

@Component({
  standalone: true,
  imports: [AsyncPipe, NgFor],
  selector: 'app-airports',
  templateUrl: './airports.component.html'
})
export class AirportsComponent {
  readonly airports$?: Observable<string[]> = inject(AirportService).findAll();
}
