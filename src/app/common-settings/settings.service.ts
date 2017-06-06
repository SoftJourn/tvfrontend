import {Injectable} from '@angular/core';
import {Response} from '@angular/http';
import {AppSettings} from '../config/app.config';
import {AuthHttp} from 'angular2-jwt';
import {Observable} from 'rxjs/Rx';

const playNextUrl = '/playlist/playNext';

@Injectable()
export class SettingsService {

    private settingsUrl = '/settings';

    constructor(private authHttp: AuthHttp) {
    }

    getSettings() {
        return this.authHttp.get(AppSettings.API_URL + this.settingsUrl) // todo try catch error handling
            .map((response: Response) => { return response.json(); })
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    };

    saveOrder(showRandom) {
        return this.authHttp.post(AppSettings.API_URL + this.settingsUrl, JSON.stringify({order: showRandom}))
            .map((response: Response) => { return response.json(); })
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

    saveDefDuration(value) {
        return this.authHttp.post(AppSettings.API_URL + this.settingsUrl, JSON.stringify({defaultDuration: value}))
            .map((response: Response) => { return response.json(); })
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

    playNext() {
        return this.authHttp.get(AppSettings.API_URL + playNextUrl)
            .map((response: Response) => { return response.json(); })
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

}
