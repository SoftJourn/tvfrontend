import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {AppSettings} from '../config/app.config';

@Injectable()
export class LoginService {

    public isLogin = false;

    public token: string;

    constructor(private http: Http) {
        this.token = localStorage.getItem('token');
    }

    login(login: string, password: string): Observable<boolean> {
        return this.http.post(AppSettings.API_URL + 'api_login', JSON.stringify({username: login, password: password}))
            .map((response: Response) => {
                if (response.json() && response.json().token) {
                    localStorage.setItem('token', JSON.stringify(response.json().token));
                    this.token = response.json().token;
                    this.isLogin = true;
                    return true;
                } else {
                    return false;
                }
            });
    }

    logout(): void {
        this.token = null;
        localStorage.removeItem('token');
    }

}
