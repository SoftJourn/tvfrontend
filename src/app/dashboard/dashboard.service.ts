import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {AppSettings} from '../config/app.config';
import {AuthHttp} from 'angular2-jwt';

@Injectable()
export class DashboardService {

    constructor(public http: Http) {
    }

    getPlaylist() {
        //return this.authHttp.get(AppSettings.API_URL + 'api_playlist')
        return this.http.get(AppSettings.API_URL + 'playlist.json')// todo try catch error handling
            .map(
                (response: Response) => {
                    // const playlist = ;
                    return response.json();
                }
            );
    };

}
