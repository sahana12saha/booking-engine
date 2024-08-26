import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BookingDetailsComponent } from './booking-details/booking-details.component';
import { PassengerDetailsComponent } from './passenger-details/passenger-details.component';
import { JourneySummaryComponent } from './journey-summary/journey-summary.component';
import { AvailableVehiclesComponent } from './available-vehicles/available-vehicles.component';

@NgModule({
  declarations: [
    AppComponent,
    BookingDetailsComponent,
    PassengerDetailsComponent,
    JourneySummaryComponent,
    AvailableVehiclesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
