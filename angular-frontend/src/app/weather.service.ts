import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs';

@Injectable()
export class WeatherService {
  
  //Your API KEY from openweathermap.org
  apiKey = '#####';
  
  url;
  constructor(private  http: Http) {
    this.url = 'https://api.openweathermap.org/data/2.5/forecast?q=';
   }

   getWeather(city, code) {
      return this.http.get(this.url + city + ',' + code + '&APPID=' + this.apiKey).map( res => res.json());
  }

}
