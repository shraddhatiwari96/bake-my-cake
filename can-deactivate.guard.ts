import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { OrderPageComponent } from '../order-page/order-page.component';
@Injectable({
  providedIn: 'root'
})
export class CanDeactivateGuard implements CanDeactivate<OrderPageComponent> {
  canDeactivate(
    component: OrderPageComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return component.canDeactivate ? component.canDeactivate() : true;
}
  
}
