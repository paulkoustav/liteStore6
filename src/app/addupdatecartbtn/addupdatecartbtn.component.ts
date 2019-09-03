import { Component, OnInit, Input } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { DataService } from '../data.service';
import { MessageService } from '../message.service';
import { AuthService } from "../auth.service";
import { DatasharingService } from "../datasharing.service";

@Component({
  selector: 'app-addupdatecartbtn',
  templateUrl: './addupdatecartbtn.component.html',
  styleUrls: ['./addupdatecartbtn.component.scss']
})
export class AddupdatecartbtnComponent implements OnInit {

  customerparam: {}
  shareddata: any;

  @Input() prd: any;
  @Input() display: any;

  constructor(private dataService: DataService, private messageService: MessageService, private authService: AuthService, private datasharingService: DatasharingService) { }

  ngOnInit() {
    this.datasharingService.currentMessage.subscribe(shareddata => this.shareddata = shareddata);

  }

  addToCart(product, qty = 1) {

    this.customerparam = { 'action': 'update', 'ProductId': product['ProductId'], 'Qty': qty, 'UserId': this.authService.getLoginId() };

    this.dataService.addToCart(this.customerparam).subscribe((response) => {
      this.datasharingService.changeMessage(response['data'])
      this.messageService.sendFlashMessage(response['msg']);
    }, error => {
      console.error("Cann't add to cart");
      return throwError(error);  
    });
  }

}
