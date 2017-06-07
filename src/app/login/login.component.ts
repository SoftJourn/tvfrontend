import {Component, OnInit, Output} from '@angular/core';
import {LoginService} from './login.service';
import {Router} from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    @Output() username;

    model: any = {};
    loading = false;
    error = '';

    constructor (
        private loginService: LoginService,
        private router: Router) {
    }

    ngOnInit() {
    }

    sendForm() {
        this.loading = true;
        this.loginService.login(this.model.login, this.model.password)
            .subscribe(result => {
                if (result === true) {
                    this.username = result;
                    this.router.navigate(['/']);
                } else {
                    this.error = 'Username or password is incorrect';
                    this.loading = false;
                }
            });
        return false;
    }


}
