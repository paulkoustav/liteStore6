import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private router: Router) { }

  private subject = new Subject<any>();

  sendMessage(message: string) {
    this.subject.next({ text: message });
  }

  clearMessage() {
    this.subject.next();
  }

  sendFlashMessage(message: string, type: string = 'NULL') {

    let msgType = 'success';
    if (type != '' && type == 'error') {
      msgType = 'error';
    }
    this.subject.next({ text: message, type: msgType });

    setTimeout(() => {
      this.clearMessage();
    }, 3000);
  }


  sendFlashMessagenRedirect(message: string, redirectUrl: string, reloadFlag: boolean) {
    this.subject.next({ text: message });
    let reload = reloadFlag ? true : false;
    setTimeout(() => {
      this.clearMessage();
      this.router.navigateByUrl('/' + redirectUrl);
      if (reload) {
        location.reload();
      }

    }, 2000);
  }

  getMessage(): Observable<any> {
    return this.subject.asObservable();
  }
}
