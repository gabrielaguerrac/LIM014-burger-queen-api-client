import { Component, Input, OnInit } from '@angular/core';
import { OrdersService } from '../services/orders/orders.service';
import { catchError} from 'rxjs/operators';
import { throwError } from 'rxjs';
import { OrdersModel, OrderProductModel, OrderDetailProductModel, IOrdersModel } from '../models/orders.model';

@Component({
  selector: 'app-waiter-tables',
  templateUrl: './waiter-tables.component.html',
  styleUrls: ['./waiter-tables.component.css']
})
export class WaiterTablesComponent implements OnInit {

  // orders = []; //como usuarios =[]
  isWaiter:boolean= true;
  orders: Array<OrdersModel> //como usuarios =[]
  insideOrders: Array<OrderProductModel>

  constructor(private orderService: OrdersService) {
    this.orders = [];
    this.insideOrders = []
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
        console.log(this.orders);
        this.orders = response;
        this.insideOrders = response.products;
        console.log(this.orders);
   })
  }

   deliverOrder(item: any){
    if (item.status === 'delivering') {
      const order: IOrdersModel ={
        ...item,
        status: 'delivered',
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

  // deliverOrder(item: any){
  //   this.orderService.deleteOrder(_id)
  //   .pipe(
  //     catchError((error)=>{
  //       // console.log('ERROR:', error);
  //       return throwError(error);
  //     })
  //   )
  //   .subscribe((response: OrdersModel ) => {
  //       console.log(response);
  //       console.log(this.orders);
  //       //getallorder con este this orders - añadir mensaje que si se entregó
  //       //this.orders = this.orders.filter(o => o._id !== response._id);
  //       //console.log(this.orders);
  //       return this.orders
  //    //NO ESTAMOS CAMBIANO DE ESTADO AUN
  //     })
  //} 
      
}

  
  


