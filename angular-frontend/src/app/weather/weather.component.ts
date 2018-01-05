import { Component, OnInit } from '@angular/core';
import {WeatherService} from '../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  citys: string;
  codes: string;
  location = {
    city: 'pune',
    code: 'in'
  };

  weather: any;
  value: any;
  constructor(private _weatherService: WeatherService) {
   this.weather = '';
   this.citys = 'pune';
   this.codes = 'in';
 }

  ngOnInit() {
    this.value = localStorage.getItem('location');
    if  (this.value != null) {
        this.location = JSON.parse(this.value);
    }else {
      this.location = {
        city: 'pune',
        code: 'in'
      }
    }

      this._weatherService.getWeather(this.location.city, this.location.code).subscribe(
         response => {
           this.weather = response;
         }
   );
}

saveForm() {

    const location = {
       city: this.citys,
       code: this.codes
     };
     console.log(location)
     this._weatherService.getWeather(location.city, location.code).subscribe(
          response => {
            this.weather = response;
            console.log(this.weather)
          }
    );
 }

}
