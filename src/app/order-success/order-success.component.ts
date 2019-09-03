import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { DataService } from '../data.service';
import { MessageService } from '../message.service';
import { AuthService } from "../auth.service";
import { DatasharingService } from "../datasharing.service";

@Component({
  selector: 'app-order-success',
  templateUrl: './order-success.component.html',
  styleUrls: ['./order-success.component.scss']
})
export class OrderSuccessComponent implements OnInit {

  records: any
  shareddata: any

  constructor(
    private dataService: DataService,
    private messageService: MessageService,
    private authService: AuthService,
    private datasharingService: DatasharingService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.route.params.subscribe(params => {
      if (params['q']) {
        this.loadData(params['q'])
      }
    });
  }

  ngOnInit() {
    this.datasharingService.currentMessage.subscribe(shareddata => this.shareddata = shareddata)
  }

  loadData(q) {
    let par = { 'PG_TXNID': q }
    this.dataService.getOrderId(par).subscribe(
      data => this.records = (data['data']['OrderId'] ? { 'OrderId': data['data']['OrderId'] } : { 'OrderId':q })

  }

}
