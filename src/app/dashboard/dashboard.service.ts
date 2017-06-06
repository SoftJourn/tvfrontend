import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {AppSettings} from '../config/app.config';
import {AuthHttp} from 'angular2-jwt';

@Injectable()
export class DashboardService {

    private itemsUrl = '/items';

    constructor(public authHttp: AuthHttp) {
    }

    getItems() {
        return this.authHttp.get(AppSettings.API_URL + this.itemsUrl) // todo try catch error handling
            .map(
                (response: Response) => {
                    return response.json();
                }
            );
    };

}
