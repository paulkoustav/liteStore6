import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { MessageService } from '../message.service';
import { AuthService } from "../auth.service";
import { throwError } from 'rxjs';

@Component({
  selector: 'app-myaccount',
  templateUrl: './myaccount.component.html',
  styleUrls: ['./myaccount.component.scss']
})
export class MyaccountComponent implements OnInit {

  constructor(private dataService: DataService, private messageService: MessageService, private authService: AuthService) { }

  customerparam: {}
  customer: any
  ngOnInit() {
    this.customerparam = { 'UserId': this.authService.getLoginId() };
    this.dataService.getCustomer(this.customerparam).subscribe((response) => {
      this.customer = response;
    }, error => {
      console.error("Error in user details!");
      return throwError(error);
    });

  }



}
