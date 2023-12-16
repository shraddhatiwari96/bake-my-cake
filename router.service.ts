import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class RouterService {

  constructor(private routerService : Router) { }

  navigateToHomeView() {
    this.routerService.navigate([""]);
  }
  navigateToOrderRequestsView() {
    this.routerService.navigate(["cake-requests"]);
  }
  navigateToLoginView() {
    this.routerService.navigate(["login"]);
}
}
