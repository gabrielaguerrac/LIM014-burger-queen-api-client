import { Component, Input, OnInit } from '@angular/core';
import { Table } from '../models/table.model';
import { OrdersService } from '../services/orders/orders.service';
// import { OrdersComponent } from '../orders/orders.component';
import { catchError} from 'rxjs/operators';
import { throwError } from 'rxjs';
import { OrdersModel, OrderProductModel, OrderDetailProductModel } from '../models/orders.model';
import { OrdersComponent } from '../orders/orders.component';


@Component({
  selector: 'app-waiter-tables',
  templateUrl: './waiter-tables.component.html',
  styleUrls: ['./waiter-tables.component.css']
})
export class WaiterTablesComponent implements OnInit {
  // @Input() orders: Array<OrdersModel>;

  // orders = []; //como usuarios =[]

  orders: Array<OrdersModel> //como usuarios =[]
  
  constructor(private orderService: OrdersService) {
    this.orders = [];
  }

  ngOnInit(): void {
   this.orderService.getAllOrders()
    .pipe(
      catchError((error)=>{
        // console.log('ERROR:', error);
        return throwError(error);
      })
    )  
    .subscribe((response: OrdersModel[]) => { 
        //console.log(response, 'dentro de subscribe');
        // this.orders = response;
        console.log(this.orders);
        this.orders = response;
        console.log(this.orders);
        // response.forEach((elem: OrdersModel) => {
        //   // this.orders[]=elem;
        //   this.orders.push(elem);
        //   console.log(this.orders);
        // })
    }) 
   }

   deliverOrder(_id: string){
    this.orderService.deleteOrder(_id)
    .pipe(
      catchError((error)=>{
        // console.log('ERROR:', error);
        return throwError(error);
      })
    )
    .subscribe((response: OrdersModel ) => {
        console.log(response);
        console.log(this.orders);
        //getallorder con este this orders - añadir mensaje que si se entregó
        //this.orders = this.orders.filter(o => o._id !== response._id);
        //console.log(this.orders);
        return this.orders
     //NO ESTAMOS CAMBIANO DE ESTADO AUN
      })
  } 
      
   }

  
  


