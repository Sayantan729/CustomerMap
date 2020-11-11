import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { BookingService } from '../services/booking.service';
import { DatabaseService } from '../services/database.service';
import { CommonValidators } from '../validators/common.validators';
import { DateValidators } from '../validators/date.validators';
import { VehicleNumValidators } from '../validators/vehicle-number.validators';
import { VehicleNumberDialogComponent } from '../vehicle-number-dialog/vehicle-number-dialog.component';

@Component({
  selector: 'app-booking-details-form',
  templateUrl: './booking-details-form.component.html',
  styleUrls: ['./booking-details-form.component.css'],
})
export class BookingDetailsFormComponent implements OnInit {
  timeNow: Date;
  form: FormGroup;
  vehicleDetails: FormGroup;
  owner: string = '12200116031s@gmail.com';

  enterVehicleDetails: boolean = false;
  selectedVehicle: boolean = false;
  
  cars: any[];

  selectedMoments = [new Date(), new Date()];

  constructor(
    private bookingService: BookingService,
    private router: Router,
    private database: DatabaseService,
    private dialog:MatDialog
  ) {
    this.form = new FormGroup({
      timeslot: new FormControl('', DateValidators.fieldRequired),
    });
  }

  ngOnInit(): void {
    this.timeNow = new Date();
    this.enterVehicleDetails=false;
    this.cars = [];
    this.database.getCarDetails({ email: this.owner }).subscribe((response) => {
      response.then((data) => {
        console.log(data);

        this.cars.length = 0;

        data.forEach((car) => {
          this.cars.push(car);
        });
      });
    });
  }

  clearAll() {
    this.form.reset();
    this.enterVehicleDetails = false;
    this.selectedVehicle = false;
    this.form.removeControl('vehicleNumber');
    this.form.removeControl('vehicleType');
    this.form.removeControl('vehicleModel');
    
  }

  setBookingDetails() {
    console.log(this.form.value);
    

    this.bookingService.setBookingData(this.form.value);
    this.router.navigate(['/customer-map']);
  }

  unsetVehicleEntry() {
    this.form.removeControl('vehicleNumber');
    this.form.removeControl('vehicleType');
    this.form.removeControl('vehicleModel');

    this.enterVehicleDetails = false;
  }

  setVehicleEntry() {
    this.form.removeControl('vehicleNumber');
    this.form.removeControl('vehicleType');
    this.form.removeControl('vehicleModel');
    this.form.addControl(
      'vehicleNumber',
      new FormControl('', [
        CommonValidators.fieldRequired,
        VehicleNumValidators.checkFormat,
      ])
    );
    this.form.addControl(
      'vehicleType',
      new FormControl('', [CommonValidators.fieldRequired])
    );
    this.form.addControl(
      'vehicleModel',
      new FormControl('', CommonValidators.fieldRequired)
    );

    this.enterVehicleDetails = true;
    this.selectedVehicle = false;
  }

  vehicleSelected(index) {
    this.selectedVehicle = true;
    let car = this.cars[index];
    console.log(this.cars[index]);
    this.form.addControl(
      'vehicleNumber',
      new FormControl(car.vehicleNum, [
        CommonValidators.fieldRequired,
        VehicleNumValidators.checkFormat,
      ])
    );
    this.form.addControl(
      'vehicleType',
      new FormControl(car.vehicleType, [CommonValidators.fieldRequired])
    );
    this.form.addControl(
      'vehicleModel',
      new FormControl(car.vehicleModel, CommonValidators.fieldRequired)
    );
  }

  changeVehicle() {
    this.selectedVehicle = false;
    this.form.removeControl('vehicleNumber');
    this.form.removeControl('vehicleType');
    this.form.removeControl('vehicleModel');
  }

  get vehicleNumber()
  {
    return this.form.get("vehicleNumber");
  }

  get vehicleModel()
  {
    return this.form.get("vehicleModel");
  }

  openVehicleNumberRules()
  {
    this.dialog.open(VehicleNumberDialogComponent,{panelClass:"vehicle-num-dialog"});
    
  }
}
