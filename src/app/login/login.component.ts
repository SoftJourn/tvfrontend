import {Component, OnInit} from '@angular/core';
import {LoginService} from './login.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    isAuth = false;

    constructor(private loginServise: LoginService) {
    }

    ngOnInit() {
        this.isAuth = this.loginServise.isAuth();
        this.loginServise.login('login', 'password');
    }

}
