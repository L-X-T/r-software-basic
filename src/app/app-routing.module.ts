import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { QuicklinkStrategy } from 'ngx-quicklink';
import { AirportsComponent } from './components/airports/airports.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'flight-booking',
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    loadChildren: () => import('./flight-booking/flight-booking.routes')
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'airports',
    component: AirportsComponent
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { preloadingStrategy: QuicklinkStrategy })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
