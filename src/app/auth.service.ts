import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  public setLoginStorage(data) : boolean {
    
    localStorage.setItem('isLoggedIn', "true");
    localStorage.setItem('token', data.data.UserId);
    localStorage.setItem('user_name', data.data.Name);

    let login_id = this.getLoginId();
    if(login_id) {
      return true;
    } else {
      return false;
    }  
  }

  public getLoginId() : string {
    
    let login_id = localStorage.getItem('token');
    if(login_id) {
      return login_id;
    }
  }

  public getLoginName() : string {
    
    let user_name = localStorage.getItem('user_name');
    if(user_name) {
      return user_name;
    }
  }

  public isLoggedIn() : boolean {
    let isLoggedIn = localStorage.getItem('isLoggedIn');
    
    if(isLoggedIn == "true") {
      return true;
    } else {
      return false;
    }
  }

  public logout(): void {
    localStorage.setItem('isLoggedIn', "false");  
    localStorage.removeItem('token');
    localStorage.removeItem('user_name');
  }
}
