import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { logging } from 'protractor';
import { BookingFailedDialogComponent } from '../booking-failed-dialog/booking-failed-dialog.component';
import { BookingSuccessDialogComponent } from '../booking-success-dialog/booking-success-dialog.component';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-confirm-booking-dialog',
  templateUrl: './confirm-booking-dialog.component.html',
  styleUrls: ['./confirm-booking-dialog.component.css']
})
export class ConfirmBookingDialogComponent implements OnInit {

  _data;
  booking;
  constructor(
    public dialogRef: MatDialogRef<ConfirmBookingDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any,private database:DatabaseService,private dialog:MatDialog) {}

  ngOnInit(): void {
    this._data=this.data;
    //console.log(this._data);
    

  }
  closeDialog()
  {
    this.dialogRef.close();
  }

  confirmBooking()
  {
    this.booking={
      carnumber:this._data.carnumber,
      carmodel:this._data.carmodel,
      type:this._data.type,
      owner:this._data.owner,
      lat:this._data.lat,
      lon:this._data.lon,
      from:this._data.from,
      to:this._data.to,
      dlat:this._data.dlat,
      dlon:this._data.dlon,
      active:1,
      cost:this._data.cost
    };

    console.log(JSON.stringify(this.booking));
    

    this.database.insertBooking(this.booking).subscribe((response)=>
    {
      response.then((data)=>{
        console.log(data);
        
        if(data.Status=="Success")
        {let dialogRefSuccess=this.dialog.open(BookingSuccessDialogComponent,
          {
            //width:'40%',
            panelClass:'transparent-dialog'
          });
          dialogRefSuccess.afterClosed().subscribe(()=>{
            this.dialogRef.close();

          })
        }
        else
        {
          let dialogRefFail=this.dialog.open(BookingFailedDialogComponent,
            {
              panelClass:'transparent-dialog',
              //width:'40%'
            });
          dialogRefFail.afterClosed().subscribe(()=>{
            this.dialogRef.close();

          })

        }

        
      })
    })




  }

}
