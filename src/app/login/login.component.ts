import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { MessageService } from '../message.service';
import { throwError } from 'rxjs';

import { Login } from "../login";
import { AuthService } from "../auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  submitted = false;
  //model={};
  model = new Login();

  onSubmit() { 
    this.submitted = true;
    //console.log(this.model);
    this.data.loginCustomer(this.model).subscribe((response) => {
      console.log(response);

      this.authService.setLoginStorage(response);

      this.messageService.sendFlashMessagenRedirect(response['msg'], 'myaccount', true);
    }, error=>{
      console.error("Error saving food!");
         return throwError(error);  // Angular 6/RxJS 6
    });
    
  }

  tryLogin() {
    
  }

  constructor(private data: DataService, private messageService: MessageService, private authService: AuthService) { }

  ngOnInit() {
  }

}
