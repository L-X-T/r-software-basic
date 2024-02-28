import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AirportService {
  private readonly url = 'http://www.angular.at/api/airport';

  private readonly httpClient = inject(HttpClient);

  findAll(): Observable<string[]> {
    return this.httpClient.get<string[]>(this.url);
  }
}
