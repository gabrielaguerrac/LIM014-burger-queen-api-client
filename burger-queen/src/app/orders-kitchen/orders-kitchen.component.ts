import { Component, OnInit } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { OrderProductModel, OrdersModel } from '../models/orders.model';
import { OrdersService } from '../services/orders/orders.service';

@Component({
  selector: 'app-orders-kitchen',
  templateUrl: './orders-kitchen.component.html',
  styleUrls: ['./orders-kitchen.component.css']
})
export class OrdersKitchenComponent implements OnInit {
  isKitchen:boolean = true;
  orders: any
  insideOrders: Array<OrderProductModel>
  
  constructor(private orderService: OrdersService) {
    this.orders = [];
    this.insideOrders = []
  }

  ngOnInit(): void {
    this.orderService.getAllOrders()
     .pipe(
       catchError((error)=>{
         // console.log('ERROR:', error);
         return throwError(error);
       })
     )  
     .subscribe((response: any) => { 
         console.log(response, 'dentro de subscribe');
         console.log(this.orders);
         this.orders = response;
         this.insideOrders = response.products;
         console.log(this.orders);
    })
  }

}
