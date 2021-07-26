import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Token } from 'src/app/models/auth';
import { BehaviorSubject, Observable } from 'rxjs';
import { IOrdersModel,OrdersModel, OrderProductModel, OrderDetailProductModel } from '../../models/orders.model';
import { ProductDetailModel } from 'src/app/models/product.model';


@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  ordenes: OrdersModel[] = []
  private cart = new BehaviorSubject<Array<OrdersModel>>([]);
  cart$ = this.cart.asObservable();
  publicarOrden(orden: OrdersModel) {
    this.ordenes = [...this.ordenes, orden]
    this.cart.next(this.ordenes)
  }

  private endpoint: string;
  url = "https://burgerqueenplants.herokuapp.com"
  constructor(private http: HttpClient) {
    /* this.domain = environment.domain; */
    this.endpoint = '/orders';
   }

  getAllOrders (): Observable<OrdersModel[]> {
    return this.http.get<Array<OrdersModel>>(`${this.url}${this.endpoint}`);
  }
  deleteOrder(uid: string):Observable<OrdersModel> {
    return this.http.delete<OrdersModel>(`${this.url}${this.endpoint}/${uid}`)
  }
  getOrderById(uid: string) {
    return this.http.get<OrdersModel>(`${this.url}${this.endpoint}/${uid}`);
  }
  updateOrder(uid: any, body: any) {
    return this.http.put<OrdersModel>(`${this.url}${this.endpoint}/${uid}`, body)
  }
  createOrder(body: any) {
    return this.http.post<Array<ProductDetailModel>>(`${this.url}${this.endpoint}`, body,)
  }
}

