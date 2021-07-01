import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IProductsModel, ProductDetailModel } from '../models/product.model';
import { ProductsService } from '../services/product/products.service';
import { OrderProductModel} from '../models/orders.model'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  items: Array<ProductDetailModel>
  productItem: Array<OrderProductModel>
  productsTypes = new Set()
  typesProduct = 'burger'
  products: Array<ProductDetailModel>
  total: number
  // name: string
  able: boolean

  constructor(private productsService: ProductsService,) { 
    this.productItem = []
    this.items = []
    this.products = [] //contiene todos
    this.total = 0
    this.able = false
  }

  ngOnInit(): void {
    this.productsService.getAllProducts()
    .subscribe((response: any) => { 
      this.items = response.products
      this.allProducts(response)
      this.filterType('burger')
    })
    this.getTotal()
  }
  
  allProducts (elem:Array<ProductDetailModel>){
    elem.forEach((el: ProductDetailModel)=>{
      this.products.push(el)
    })
  }
  filterType(category: any) {
    this.items = this.products.filter((elem: ProductDetailModel) => {
      return elem.type === category;
    })
  }
  addItemToCar(item: any){ 
    const modelProduct = {
      qty: 1,
      product: {
        name: item.name,
        id: item._id,
        price: item.price
      }
    }  
    if (this.productItem) {
          let productExistInCar = this.productItem
          .find(product => item._id === product.product.id)
          if (!productExistInCar) {
            this.productItem.push(modelProduct)
          }
          console.log(this.productItem);
    }    
    this.getTotal()
  }
  minousOneItem(item: OrderProductModel){
    this.productItem = this.productItem.map((el)=>{
      if (el.product.id === item.product.id && el.qty > 1) {
        el.qty--
      }
      return el
    })
    this.getTotal()
  }
  plusOneItem(item: OrderProductModel){
    this.productItem = this.productItem.map((el)=>{
      if (el.product.id === item.product.id) {
        el.qty++
      }else if (el.product.id === item.product.id && el.qty <= 1) {
        let index = this.productItem.indexOf(item)
        this.productItem.splice(index, 1)
      }
      return el
    })
    this.getTotal()
  }
  trashItem(item: OrderProductModel){
    let index = this.productItem.indexOf(item)
    this.productItem.splice(index, 1)
    this.getTotal()
  }
  getTotal() {
    this.total = this.productItem
      .map(item => item.qty * item.product.price)
      .reduce((acc, item) => acc += item, 0)
      // if(this.total>0){
      //   this.able=true}
      // else{
      //   this.able=false
      // }
  }
}


