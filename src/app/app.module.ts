import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchmapComponent } from './searchmap/searchmap.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppData } from './app.details';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import { ConfirmBookingDialogComponent } from './confirm-booking-dialog/confirm-booking-dialog.component';
import { BookingSuccessDialogComponent } from './booking-success-dialog/booking-success-dialog.component';
import { BookingFailedDialogComponent } from './booking-failed-dialog/booking-failed-dialog.component';
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';
import { BookingDetailsFormComponent } from './booking-details-form/booking-details-form.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatDatepickerModule} from '@angular/material/datepicker';

import { MatNativeDateModule } from '@angular/material/core';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';

 

export function playerFactory() {
  return player;
}

@NgModule({
  declarations: [
    AppComponent,
    SearchmapComponent,
    ConfirmBookingDialogComponent,
    BookingSuccessDialogComponent,
    BookingFailedDialogComponent,
    BookingDetailsFormComponent,
    
  ],
  imports: [
  
  BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    LottieModule.forRoot({ player: playerFactory }),
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    OwlDateTimeModule, 
    OwlNativeDateTimeModule,
    
    
    
    
  ],
  providers: [AppData],
  bootstrap: [AppComponent]
})
export class AppModule { }
