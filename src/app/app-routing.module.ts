import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookingDetailsFormComponent } from './booking-details-form/booking-details-form.component';
import { SearchmapComponent } from './searchmap/searchmap.component';


const routes: Routes = [
  {path:'',component:BookingDetailsFormComponent},
  {path:'customer-map',component:SearchmapComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  
exports: [RouterModule]
})
export class AppRoutingModule { }
