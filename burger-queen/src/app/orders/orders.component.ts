import { ThrowStmt } from '@angular/compiler';
import { Component, Input, Output, OnInit, EventEmitter, Host } from '@angular/core';
import { OrdersModel, OrderProductModel, OrderDetailProductModel } from '../models/orders.model';
import { OrdersService } from '../services/orders/orders.service';
import { WaiterTablesComponent } from '../waiter-tables/waiter-tables.component';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  @Input('data') order:any;

  @Output() deliver = new EventEmitter<string>()

  isDisplay:boolean = false;

  // @Input('data') 'order':any

  // orders: Array<OrdersModel>
  // @Output() borrar = new EventEmitter<string>() --PARTE DE EMIT

  constructor()
    // private ordersService: OrdersService,
    // @Host() private _app: WaiterTablesComponent)
     {}

  ngOnInit(): void {
   
  }

  showValidation(){
    this.isDisplay =! this.isDisplay;
  }

  deliverOrder(_id: string){
    console.log('click en yes');
    //desaparecer la orden de la pantalla
    console.log(_id);
    this.deliver.emit(_id) //PARTE DE EMIT

    // this._app.orders = this._app.orders.filter((order) =>{
    //   order.id != id
    // })
  }
}
