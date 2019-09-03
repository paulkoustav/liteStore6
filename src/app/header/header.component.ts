import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { DataService } from '../data.service';
import { AuthService } from "../auth.service";
import { MessageService } from "../message.service";
import { DatasharingService } from "../datasharing.service";

import { throwError } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: []
})
export class HeaderComponent implements OnInit {

  isLoggedIn = false
  name: string
  customerparam: {}
  model = {};

  shareddata: any;
  categories: any;

  constructor(
    private dataService: DataService,
    private authService: AuthService,
    private messageService: MessageService,
    private datasharingService: DatasharingService,
    private router: Router
  ) { }

  ngOnInit() {

    this.datasharingService.currentMessage.subscribe(shareddata => this.shareddata = shareddata)

    this.customerparam = { 'UserId': this.authService.getLoginId() };

    this.dataService.getCategories().subscribe(
      data => this.categories = data['data']['categories']
    );

    this.dataService.cartItems(this.customerparam).subscribe((response) => {
      this.datasharingService.changeMessage(response['data']);
    }, error => {
      return throwError(error);
    });

    this.isLoggedIn = this.authService.isLoggedIn();
    this.name = this.authService.getLoginName();
  }

  logout(): void {
    this.authService.logout();
    this.messageService.sendFlashMessagenRedirect('Logout successfully', '/', true);
  }

  public onSearch(q: string) {

    //let q = this.model

    this.router.navigate(["search", q]).then(e => {
      if (e) {
        //console.log("Navigation is successful!" + q);
      } else {
        //console.log("Navigation has failed!");
      }
    });
  }
}
