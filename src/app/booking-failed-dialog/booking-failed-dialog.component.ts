import { Component, OnInit } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-booking-failed-dialog',
  templateUrl: './booking-failed-dialog.component.html',
  styleUrls: ['./booking-failed-dialog.component.css']
})
export class BookingFailedDialogComponent implements OnInit {
  animOptions:AnimationOptions={path:'assets/json-animations/failure.json',loop:0};

  constructor() { }

  ngOnInit(): void {
  }

}
