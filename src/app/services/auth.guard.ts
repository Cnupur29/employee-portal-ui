import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from './auth.service';


@Injectable()
export class AuthGuard implements CanActivate{

  constructor(private authservice : AuthService){}

  canActivate(): any {
    if(this.authservice.isAuthenticated()) {
      return true;
    }
    else {
      this.authservice.login();
    }
  }
  
}
