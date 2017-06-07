import {Component, OnDestroy, OnInit} from '@angular/core';
import {LoginService} from '../login/login.service';
import {Router} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  // public subscribe: Subscription;
  public userLogin;

  constructor(private router: Router, private loginService: LoginService) { }

  ngOnInit() {
    // this.subscribe = this.loginService.getUserData().subscribe(
    //     (account) => {
          this.userLogin = localStorage.getItem('login');
          // console.log(account);
        // }
    // );
  }

  logout() {
    this.loginService.logout();
    this.router.navigate(['/login']);
  }

  ngOnDestroy() {
  //   this.subscribe.unsubscribe();
  }

}
