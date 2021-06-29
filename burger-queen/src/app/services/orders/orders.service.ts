import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Token } from 'src/app/models/auth';
import { OrdersComponent } from 'src/app/orders/orders.component';
import { Observable } from 'rxjs';
import { IOrdersModel,OrdersModel, OrderProductModel, OrderDetailProductModel } from 'src/app/models/orders.model';
import { IProductsModel } from 'src/app/models/product';


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

  getAllOrders (): Observable<OrdersModel[]> {
    return this.http.get<Array<OrdersModel>>(`${this.url}${this.endpoint}`);
    }

  deleteOrder(uid: string) :Observable<OrdersModel>{
    return this.http.delete<OrdersModel>(`${this.url}${this.endpoint}/${uid}`)
  }

}

