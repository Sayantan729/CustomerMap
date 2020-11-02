import { Component, OnInit } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-booking-success-dialog',
  templateUrl: './booking-success-dialog.component.html',
  styleUrls: ['./booking-success-dialog.component.css']
})
export class BookingSuccessDialogComponent implements OnInit {
  animOptions:AnimationOptions={path:'assets/json-animations/success.json',loop:0};

  constructor() { }

  ngOnInit(): void {
  }

}
