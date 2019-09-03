import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { DataService } from '../data.service';
import { MessageService } from '../message.service';
import { AuthService } from "../auth.service";
import { DatasharingService } from "../datasharing.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  shareddata:any;
  records: any

  constructor(
    private dataService: DataService, 
    private messageService: MessageService, 
    private authService: AuthService, 
    private datasharingService: DatasharingService,
    private route: ActivatedRoute,
    private router: Router
) { }

  ngOnInit() {
    this.datasharingService.currentMessage.subscribe(shareddata => this.shareddata = shareddata)

    let id = this.route.snapshot.paramMap.get('id');
    
    this.dataService.getProduct(id).subscribe(
      data => {
        this.records = { 'product': data['data'], 'display': { 'lbl': 'Add to cart', 'for': 'add_cart' } }
      }
    )


  }

}
