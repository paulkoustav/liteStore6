import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';
import { MessageService } from '../message.service';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  records: any;
  constructor(private dataService: DataService, private messageService: MessageService) { }
  ngOnInit() {

    this.dataService.homeContent().subscribe(
      data => {
        this.records = data['records'];
      }
    )
  }
}
