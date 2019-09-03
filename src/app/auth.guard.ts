import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router:Router) {}

  canActivate(route:ActivatedRouteSnapshot, state:RouterStateSnapshot) : boolean {
    let url: string = state.url;
    return this.verifyLogin(url);
  }

  verifyLogin(url) : boolean {
    if(!this.isLoggedIn()) {
      this.router.navigate(['/login']);
      return false;
    } else {
      return true;
    }
  }

  isLoggedIn() : boolean {
    let status = false;
    let login_flag = localStorage.getItem("isLoggenIn");
    if(login_flag) {
      status = true;
    } else {
      status = false;
    }
    return status;
  }
  
}
