import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingService {


  private _bookingDetails=new BehaviorSubject(null);
  constructor() { }

  get bookingDetails()
  {
    return this._bookingDetails;
  }

  setBookingData(data)
  {
    this._bookingDetails.next(data);
  }

  clearBookingData()
  {
    this._bookingDetails.next(null);
  }
}
