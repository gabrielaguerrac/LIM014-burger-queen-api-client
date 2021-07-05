import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IOrdersModel, OrderProductModel } from '../models/orders.model';
import { IProductsModel, ProductDetailModel } from '../models/product.model';

@Component({
  selector: 'orders-car',
  templateUrl: './orders-car.component.html',
  styleUrls: ['./orders-car.component.css']
})
export class OrdersCarComponent implements OnInit {
  @Input() client: string
  @Input() today: number
  @Input() productItem:any
  @Input() total:number = 0
  @Input() showButton:boolean = false
  @Output() addToCar: EventEmitter<ProductDetailModel> = new EventEmitter()
  @Output() minousOneItem: EventEmitter<OrderProductModel> = new EventEmitter()
  @Output() plusOneItem: EventEmitter<OrderProductModel> = new EventEmitter()
  @Output() trashItem: EventEmitter<OrderProductModel> = new EventEmitter()
  @Output() newOrderClient: EventEmitter<IOrdersModel> = new EventEmitter()

  constructor() {
    this.client = ""
    this.productItem = []
    this.today = Date.now()
  }
  ngOnInit(): void {
    /* console.warn('Pedido', this.productItem); */
  }
  
  addItemToCar(product: any){
    this.addToCar.emit(product)
  }
  minousOne(product: any){
    this.minousOneItem.emit(product)
  }
  plusOne(product: any){
    this.plusOneItem.emit(product)
  }
  trash(product: any){
    this.trashItem.emit(product)
  }
  newOrder(client: any){
    this.newOrderClient.emit(client)
  }
}
