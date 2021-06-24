import { Component, OnInit } from '@angular/core';
import { Table } from '../models/table.model';
import { OrdersService } from '../services/orders/orders.service';
// import { OrdersComponent } from '../orders/orders.component';
import { catchError} from 'rxjs/operators';
import { throwError } from 'rxjs';


@Component({
  selector: 'app-waiter-tables',
  templateUrl: './waiter-tables.component.html',
  styleUrls: ['./waiter-tables.component.css']
})
export class WaiterTablesComponent implements OnInit {

  constructor(
    private orderService: OrdersService,
    // private orderComponent: OrdersComponent,
  ) {}

  ngOnInit(): void {
   this.orderService.getAllOrders()
    .pipe(
      catchError((error)=>{
        // console.log('ERROR:', error);
        return throwError(error);
      })
    )  
    .subscribe((response) => { 

        console.log(response, 'dentro de subscribe');
        // window.localStorage.setItem('accessToken', response.token);
        // localStorage.getItem('accessToken');
    }) 
   }
  }


