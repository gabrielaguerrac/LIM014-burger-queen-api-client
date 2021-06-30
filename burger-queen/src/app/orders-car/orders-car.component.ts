import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IProductsModel, ProductDetailModel } from '../models/product.model';
import { ProductsService } from '../services/product/products.service'

@Component({
  selector: 'orders-car',
  templateUrl: './orders-car.component.html',
  styleUrls: ['./orders-car.component.css']
})
export class OrdersCarComponent implements OnInit {

  @Input() productItem:any
  @Output() addToCar: EventEmitter<ProductDetailModel> = new EventEmitter()
  
  // items: Array<ProductDetailModel>
  // products: Array<ProductDetailModel>
  

  constructor(private productsService: ProductsService,) {
    // this.items = []
    // this.products = []
    this.productItem = []
  }

  ngOnInit(): void {
    console.warn('Pedido', this.productItem);
  }

  // allProducts (elem:Array<ProductDetailModel>){
  //   elem.forEach((el: ProductDetailModel)=>{
  //     this.products.push(el)
  //   })
  // }

  addItemToCar(product: any){
    this.addToCar.emit(product)
  }

  minousOneItem(){
    //todo estos métodos tienen output xq estarán en el componente padre
  }
  plusOneItem(){

  }
  trashItem(){
    // return this.items;
  }
}
