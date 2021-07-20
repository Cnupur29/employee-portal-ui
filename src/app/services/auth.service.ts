import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as auth0 from 'auth0-js';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  auth0 = new auth0.WebAuth({
    clientID: 'IdBxJQzpZxxv1r1Zblb1ojAqh1aL6vTz',
    domain: 'schaudha.us.auth0.com',
    responseType: 'token id_token',
    redirectUri: 'http://localhost:4200/callback',
    scope: 'openid view:employees view:employee',
    audience: 'http://localhost:8081'
  })
  constructor(public router: Router) { }

  public login() : void {
    this.auth0.authorize();
  }

  public handleAuthentication() : void {
    this.auth0.parseHash((err , authResult) => {
      if(authResult && authResult.accessToken && authResult.idToken) {
        window.location.hash = '';
        this.setSession(authResult);
        this.router.navigate(['/listEmployees'])
      }
      else if(err) {
        this.router.navigate(['/listEmployees']);
        console.log(err);
      }
    })
  }
  setSession(authResult: any) : void  {
    const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    localStorage.setItem('access_token' , authResult.accessToken);
    localStorage.setItem('id_token' , authResult.idToken);
    localStorage.setItem('expires_at' , expiresAt);
  }

  public logout() : void {
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    this.router.navigate(['/']);
  }

  public isAuthenticated() : boolean {
    
    const expiresAt = JSON.parse(localStorage.getItem('expires_at') as string);
    return new Date().getTime() < expiresAt;
  }
}
