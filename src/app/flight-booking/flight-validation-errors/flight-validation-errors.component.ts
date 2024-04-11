import { Component, Input } from '@angular/core';
import { ValidationErrors } from '@angular/forms';
import { JsonPipe, NgIf } from '@angular/common';

@Component({
  selector: 'app-flight-validation-errors',
  templateUrl: './flight-validation-errors.component.html',
  styleUrls: ['./flight-validation-errors.component.css'],
  standalone: true,
  imports: [NgIf, JsonPipe]
})
export class FlightValidationErrorsComponent {
  @Input({ required: true }) errors: ValidationErrors | null = null;
  @Input() fieldLabel = 'Field';
}
