import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { DataService } from '../data.service';
import { AuthService } from "../auth.service";
import { MessageService } from "../message.service";
import { DatasharingService } from "../datasharing.service";

import { throwError } from 'rxjs';
import { Cartclass } from '../Cartclass';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  shareddata: any;
  display: any;
  display2: any;
  customerparam: {}
  addressSelected: any
  default_address_id: any
  pgparam: {}
  pgdetails: any
  addressparam: {}
  UserId = this.authService.getLoginId();

  model = new Cartclass(0, 0, '', '', '', '', '', '', 0, 0, '', false);

  constructor(
    private dataService: DataService,
    private authService: AuthService,
    private messageService: MessageService,
    private datasharingService: DatasharingService,
    private router: Router
  ) { }

  ngOnInit() {

    this.datasharingService.currentMessage.subscribe(shareddata => {

      this.shareddata = shareddata;
      this.default_address_id = this.shareddata.address_default;

      if (this.default_address_id) {
        this.changeAddress(this.default_address_id);
        this.model['address_id'] = this.default_address_id;
      }

    });

    this.display = { 'lbl': 'Add to cart', 'for': 'cart_delete' };
    this.display2 = { 'lbl': 'update', 'for': 'cart_update' };

  }

  changeAddress(address_id: number) {
    if (address_id == -1) {

      this.addressSelected = [];
      delete this.model['address_id'];

    } else {

      this.addressparam = { 'UserId': this.UserId, 'address_id': address_id };
      this.dataService.setAddress(this.addressparam).subscribe((response) => {

        this.addressSelected = this.shareddata.address_all.filter(
          addr => addr.id === address_id);

        delete this.model.UserId;
        delete this.model.id;
        delete this.model.name;
        delete this.model.email;
        delete this.model.country;
        delete this.model.city;
        delete this.model.state;
        delete this.model.street;
        delete this.model.pin;

      }, error => {
        console.error("Error in set address!");
        return throwError(error);
      });

    }
  }

  addAddress() {

    if (this.UserId && this.model.name && this.model.street && this.model.pin) {

      this.addressparam = { 'UserId': this.UserId, 'name': this.model.name, 'email': this.model.email, 'country': this.model.country, 'city': this.model.city, 'state': this.model.state, 'street': this.model.street, 'pin': this.model.pin };
      this.dataService.addAddress(this.addressparam).subscribe((response) => {

        delete this.model.UserId;
        delete this.model.id;
        delete this.model.name;
        delete this.model.email;
        delete this.model.country;
        delete this.model.city;
        delete this.model.state;
        delete this.model.street;
        delete this.model.pin;

      }, error => {
        console.error("Error in add address!");
        return throwError(error);
      });
    }

  }

  placeOrder() {


    let payment_method = this.model.payment_method;
    let terms_cond = this.model.terms_cond;

    if (terms_cond) {
      if (payment_method != 'cod') {

        this.pgparam = { 'UserId': this.UserId, 'payment_method': payment_method };
        this.dataService.getPGdetails(this.pgparam).subscribe((response) => {
          this.pgdetails = response;

          var form = document.createElement("form");
          form.setAttribute("method", this.pgdetails['data']['method']);
          form.setAttribute("action", this.pgdetails['data']['path']);

          let obj = this.pgdetails['data']['paramList'];
          Object.keys(obj).forEach(function (key) {
            let input = document.createElement("input");
            input.setAttribute('type', "hidden");
            input.setAttribute('name', key);
            input.setAttribute('value', obj[key]);
            form.appendChild(input);
          });
          document.body.appendChild(form);
          form.submit();

        }, error => {
          console.error("Error in PG details!");
          return throwError(error);
        });

      } else {

        this.customerparam = { 'UserId': this.UserId, 'extra_input': this.model };

        this.dataService.placeOrder(this.customerparam).subscribe((response) => {

          this.router.navigate(['order-success/'+response['data']['OrderId']]).then(e => {
            if (e) {
              this.datasharingService.changeMessage(response['data']);
              this.messageService.sendFlashMessage(response['msg']);
            } else {
            }
          });

        }, error => {
          this.router.navigate(['order-fail']).then(e => {
            if (e) {
            } else {
            }
          });
          return throwError(error);
        });
      }
    } else {
      this.messageService.sendFlashMessage('Please check terms and conditions.', 'error');
    }


  }

}
