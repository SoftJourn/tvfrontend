import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {Observable} from 'rxjs/Rx';
import {tokenNotExpired} from 'angular2-jwt';
import {LoginService} from './login.service';
@Injectable()
export class LoginGuard implements CanActivate {

    constructor(private router: Router, private loginService: LoginService) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | boolean {
        if (tokenNotExpired('token')) {
            return true;
        }
        if (this.loginService.isLogin) {
            return true;
        }

        this.router.navigate(['/login']);
        return false;
    }
}
