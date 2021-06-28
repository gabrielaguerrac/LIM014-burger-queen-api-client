import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Token } from 'src/app/models/auth';
import { OrdersComponent } from 'src/app/orders/orders.component';
import { Observable } from 'rxjs';
import { IAllOrderModel, OrdersModel } from 'src/app/models/orders.model';

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

  getAllOrders (): Observable<IAllOrderModel> {
    return this.http.get<IAllOrderModel>(`${this.url}${this.endpoint}`);
  }
  getOrderById(uid: any) {
    return this.http.get<OrdersModel>(`${this.url}${this.endpoint}/${uid}`);
  }
  deleteOrder(uid: any,) {
    return this.http.delete<OrdersModel>(`${this.url}${this.endpoint}/${uid}`)
  }
  updateOrder(uid: any, body: any) {
    return this.http.put<OrdersModel>(`${this.url}${this.endpoint}/${uid}`, body)
  }
  createOrder(body: any) {
    return this.http.post<OrdersModel>(`${this.url}${this.endpoint}`, body,)
  }
}

