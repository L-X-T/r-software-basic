import { enableProdMode, importProvidersFrom } from '@angular/core';

import { environment } from './environments/environment';
import { AppComponent } from './app/app.component';
import { QuicklinkModule } from 'ngx-quicklink';
import { AppRoutingModule } from './app/app-routing.module';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { bootstrapApplication, BrowserModule } from '@angular/platform-browser';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      BrowserModule,
      // FlightBookingModule,
      AppRoutingModule,
      QuicklinkModule
    ),
    provideHttpClient(withInterceptorsFromDi())
  ]
}).catch((err) => console.error(err));
