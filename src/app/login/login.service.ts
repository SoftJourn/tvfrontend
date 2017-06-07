import {Injectable, Output} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {AppSettings} from '../config/app.config';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class LoginService {

    userData: BehaviorSubject<any> = new BehaviorSubject(null);

    public isLogin = false;

    public token: string;

    constructor(private http: Http) {
        this.token = localStorage.getItem('token');
    }

    login(login: string, password: string): Observable<boolean> {
        return this.http.post(AppSettings.API_URL + '/login', JSON.stringify({username: login, password: password}))
            .map((response: Response) => {
                console.log(response);
                if (response.json().status === true && response.json().token) {
                    localStorage.setItem('token', response.json().token);
                    localStorage.setItem('login', response.json().user.login);
                    this.token = response.json().token;
                    this.isLogin = true;
                    return true;
                } else {
                    return false;
                }
            });
    }

    logout() {
        this.token = null;
        localStorage.removeItem('token');
        localStorage.removeItem('login');
    }

}
