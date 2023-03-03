import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  isOpened = true;
  // avec RxJS, et des abonnements/notifications
  isOpened$ = new BehaviorSubject<boolean>(false);

  open() {
    this.isOpened = true;
  }

  close() {
    this.isOpened = false;
  }

}
