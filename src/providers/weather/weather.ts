import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class WeatherProvider {
  apikey = '707ece5419d87d8b';
  url;
  
  /*
    현재일기상황
    http://api.wunderground.com/api/707ece5419d87d8b/conditions/q/lang:KR/q/SouthKorea/Seoul.json
    예보
    http://api.wunderground.com/api/707ece5419d87d8b/forecast/lang:KR/q/SouthKorea/Seoul.json
  */

  constructor(public http: Http) {
    console.log('Hello WeatherProvider Provider');
       this.url = 'http://api.wunderground.com/api/' + this.apikey + '/conditions/q/';
  }

  getWeather(city, state) {
    return this.http.get(this.url+'/'+state+'/'+city+'.json')
      .map(res => res.json());
  } 
}
