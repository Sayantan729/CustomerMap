import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BookingService } from '../services/booking.service';
import { CommonValidators } from '../validators/common.validators';
import { DateValidators } from '../validators/date.validators';
import { VehicleNumValidators } from '../validators/vehicle-number.validators';

@Component({
  selector: 'app-booking-details-form',
  templateUrl: './booking-details-form.component.html',
  styleUrls: ['./booking-details-form.component.css']
})
export class BookingDetailsFormComponent implements OnInit {
  timeNow:Date;
  form:FormGroup;
  selectedMoments = [
    new Date(),
    new Date()
];

  constructor(private bookingService:BookingService,private router:Router) {
    this.form=new FormGroup({
      vehicleNumber:new FormControl('',[CommonValidators.fieldRequired,VehicleNumValidators.checkFormat]),
      vehicleType:new FormControl('',[CommonValidators.fieldRequired]),
      vehicleModel:new FormControl('',CommonValidators.fieldRequired),
      timeslot:new FormControl('',DateValidators.fieldRequired),
      


    })
   }

  ngOnInit(): void {
    this.timeNow=new Date();
  }

  

  clearAll()
  {
    this.form.reset();
  }

  setBookingDetails()
  {
    console.log(this.form.value);
    this.bookingService.setBookingData(this.form.value);
    this.router.navigate(['/customer-map']);

    
  }

 
}
