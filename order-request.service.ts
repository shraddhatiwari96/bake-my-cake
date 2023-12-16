import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order } from '../models/order';

@Injectable({
  providedIn: 'root'
})
export class OrderRequestService {

  URL: string = "http://localhost:3000/orders";
  constructor(private http: HttpClient) { }

  getAllOrderReqeusts() : Observable<Array<Order>> {
    return this.http.get<Array<Order>>(`${this.URL}`);
  }

  saveOrderRequest(order? : Order) : Observable<Order> {
    return this.http.post<Order>(`${this.URL}`, order)
  }
}
