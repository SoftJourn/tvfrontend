import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {

  public isLogin = false;

  constructor() { }

  login(login, password) {
      if (login && password) {
          // http request
          this.isLogin = true;
          return true;
      }
  }

}
