import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DatasharingService {

  private messageSource = new BehaviorSubject(0);
  currentMessage = this.messageSource.asObservable();

  constructor() { }

  changeMessage(shareddata: any) {
    this.messageSource.next(shareddata)
  }



}
