import { Component, OnInit } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IOrdersModel, OrderProductModel, OrdersModel } from '../models/orders.model';
import { OrdersService } from '../services/orders/orders.service';

@Component({
  selector: 'app-orders-kitchen',
  templateUrl: './orders-kitchen.component.html',
  styleUrls: ['./orders-kitchen.component.css']
})
export class OrdersKitchenComponent implements OnInit {
  isKitchen:boolean = true;
  orders: any
  orderPending: Array<IOrdersModel>
  orderDelivering: Array<IOrdersModel>
  
  constructor(private orderService: OrdersService) {
    this.orders = []
    this.orderPending = []
    this.orderDelivering = []
  }

  ngOnInit(): void {
    this.bringAllOrders()
  }

  bringAllOrders(){

    
    this.orderService.getAllOrders()
    .pipe(
      catchError((error)=>{
        // console.log('ERROR:', error);
        return throwError(error);
      })
    )  
    .subscribe((response: any) => { 
        this.orders = response;
        console.log(this.orders);
   })
  }

  updateOneOrder(item: any){
    // const dateProcesed = dayjs();
    if (item.status === 'pending') {
      const order: IOrdersModel ={
        ...item,
        status: 'delivering',
        // dateProcesed: dateProcesed.format('YYYY-MM-DD HH:mm:ss')
      }
      this.orderService.updateOrder(item._id, order)
      .pipe(catchError((error)=>{
        return throwError(error);
      })
      )
      .subscribe(()=>{
        
        this.bringAllOrders()
      })  
    }
  }
}
