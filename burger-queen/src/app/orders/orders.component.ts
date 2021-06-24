import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  deliveringOrder(){
    console.log('click en deliver button');
    //se muestra componente de validacion
    //
  }

}
