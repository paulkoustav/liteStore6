import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { DataService } from '../data.service';
import { MessageService } from '../message.service';
import { AuthService } from "../auth.service";
import { DatasharingService } from "../datasharing.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  qString: string
  pager: any
  currentPage = 1
  pageSize = 18
  totalPages: number
  prange: any = []

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
        if (this.qString != params['q']) {
          this.qString = params['q']
          this.currentPage = 1
        }

        this.loadData()
      }
    });
  }

  ngOnInit() {
    this.datasharingService.currentMessage.subscribe(shareddata => this.shareddata = shareddata)
  }

  loadData() {

    this.dataService.getProductsList({ qString: this.qString, page: this.currentPage, limit: this.pageSize }).subscribe(
      data => {
        console.log(this.qString);
        this.records = { 'products': data['data']['products'], 'display': { 'lbl': 'Add to cart', 'for': 'add_cart' } };
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
