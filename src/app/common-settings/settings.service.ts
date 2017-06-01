import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {AppSettings} from '../config/app.config';
import {AuthHttp} from 'angular2-jwt';

const orderUrl = 'api_playlist/order';
const durationUrl = 'api_playlist/order';
const playNextUrl = 'api_playlist/order';

@Injectable()
export class SettingsService {

  constructor(private http: Http) {}

  saveOrder(value) {
    return this.http.put(AppSettings.API_URL + orderUrl, JSON.stringify({value: value, abra: 'cadabra'}))
        .map(
            (response: Response) => {
              const data = response.json();
              return data;
            }
        );
  }

  saveDefDuration(value) {
    return this.http.put(AppSettings.API_URL + durationUrl, JSON.stringify({value: value}))
        .map(
            (response: Response) => {
              const data = response.json();
              return data;
            }
        );
  }

  playNext() {
      return this.http.get(AppSettings.API_URL + playNextUrl)
          .map(
              (response: Response) => {
                  const data = response.json();
                  return data;
              }
          );
  }

}
