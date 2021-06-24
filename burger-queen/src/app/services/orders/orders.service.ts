import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Token } from 'src/app/models/auth';
import { OrdersComponent } from 'src/app/orders/orders.component';
import { Auth } from 'src/app/models/auth';
import { Observable } from 'rxjs';
import { Orders } from 'src/app/models/orders';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  private endpoint: string;
  url = "http://localhost:4201"
  constructor(private http: HttpClient) {
    /* this.domain = environment.domain; */
    this.endpoint = '/orders';
   }

  getAllOrders (): Observable<Orders> {
    return this.http.get<Orders>(`${this.url}${this.endpoint}`);
    }
}

