import {Injectable} from '@angular/core';
import {Response} from '@angular/http';
import {AppSettings} from '../config/app.config';
import {AuthHttp} from 'angular2-jwt';
import {Observable} from 'rxjs/Rx';


@Injectable()
export class ItemService {

  private itemsUrl = '/items';

  constructor(private authHttp: AuthHttp) {}

  deleteItem(id: string) {
    return this.authHttp.delete(AppSettings.API_URL + this.itemsUrl, JSON.stringify({id: id}))
        .map((response: Response) => { return response.json(); })
        .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  };

}
