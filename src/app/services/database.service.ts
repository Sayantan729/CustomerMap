import { Injectable } from '@angular/core';
import { AppData } from '../app.details';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private appData:AppData,private dataService:DataService) { }

  fetchSpotsForMap(vehicleType:string,fromtime:string,totime:string)
  {
    return this.dataService.getData(`${this.appData.appData.databaseApi}getspotsmap.php?type=${vehicleType}&fromtime=${encodeURIComponent(fromtime)}&totime=${encodeURIComponent(totime)}`);

  }

  insertBooking(bookingData)
  {
    return this.dataService.postData(`${this.appData.appData.databaseApi}insertbooking.php`,bookingData);

  }

  getCarDetails(userData)
  {
    return this.dataService.postData(`${this.appData.appData.databaseApi}getCarsList.php`,userData);
  }
}
