import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { DataService } from '../data.service';
import { MessageService } from '../message.service';
import { throwError } from 'rxjs';

import { FileuploadComponent } from "../fileupload/fileupload.component";

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  countries = ['India', 'USA', 'UK', 'Japan'];

  model = new Customer(null, '', null, '', '', []);

  uploadedfiles: any
  imagedir = 'user'

  constructor(private data: DataService, private messageService: MessageService) { }

  ngOnInit() {

  }

  submitted = false;

  newRegistration() {
    //this.submitted = true;
    console.log(this.model);
    this.data.createCustomer(this.model).subscribe((response) => {
      console.log(response);

      this.messageService.sendFlashMessage(response['msg']);
    }, error => {
      console.error("Error in registration!");
      return throwError(error);  // Angular 6/RxJS 6
    });

  }

  receiveMessage($event) {
    this.model.uploadedfiles = $event
    //console.log(this.model.uploadedfiles);
  }
}
