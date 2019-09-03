import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { DataService } from '../data.service';
import { MessageService } from '../message.service';
import { AuthService } from "../auth.service";
import { DatasharingService } from "../datasharing.service";

@Component({
  selector: 'app-myorders',
  templateUrl: './myorders.component.html',
  styleUrls: ['./myorders.component.scss']
})
export class MyordersComponent implements OnInit {

  constructor(
    private dataService: DataService,
    private messageService: MessageService,
    private authService: AuthService,
    private datasharingService: DatasharingService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.loadData();
  }

  pager: any
  currentPage = 1
  pageSize = 10
  totalPages: number
  prange: any = []

  records: any
  shareddata: any

  ngOnInit() {
    this.datasharingService.currentMessage.subscribe(shareddata => this.shareddata = shareddata)
  }

  loadData() {

    this.dataService.getMyOrders({ userId: this.authService.getLoginId(), page: this.currentPage, limit: this.pageSize }).subscribe(
      data => {
        console.log(data['data']['orders']);
        this.records = { 'orders': data['data']['orders'] };
        this.pager = { 'total': data['data']['total'], 'currentPage': this.currentPage, 'pageSize': this.pageSize }
      }
    )

  }

  goToPage(n: number): void {
    this.currentPage = n;
    this.loadData();
  }

  onNext(): void {
    this.currentPage++;
    this.loadData();
  }

  onPrev(): void {
    this.currentPage--;
    this.loadData();
  }

}
