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

  /* @Input() products: ProductDetailModel; */
  

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
      console.log(response);
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
  addItemToCar(item: any){ //este es un evento que voy a enviar al compon. orders-car = OUTPUT
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
          if (productExistInCar === undefined) {
            this.productItem.push(modelProduct)
          }
          console.log(this.productItem);
    }
    
    // console.log(modelProduct);
    
    //   this.getTotal()
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
  // Se filtra por los 3 tipos de productos: Burger, Drink & Side-Dish
  // filter(elemento: Array<ProductDetailModel>){
  //   elemento.forEach((el: ProductDetailModel)=>{
  //     this.productsTypes.add(el.type)
  //   })
  // }
}


