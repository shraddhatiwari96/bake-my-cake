import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { Order } from '../models/order';



@Injectable({
  providedIn: 'root'
})
export class ProductService {

  URL: string = "http://localhost:3000/products";
  url: string = "http://localhost:3000/orders"

  constructor(private http: HttpClient) { }

  addOrderForm(event:Order):Observable<Order>{
    return this.http.post<Order>(this.url,event);
  }
  

  getAllProducts(): Observable<Array<Product>> {
    return this.http.get<Array<Product>>(this.URL)
  }

  getProduct(id?: string) : Observable<Product>{
    return this.http.get<Product>(`${this.URL}/${id}`);
  }
}
