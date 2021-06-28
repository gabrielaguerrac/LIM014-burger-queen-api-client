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

  /* @Input() products: ProductDetailModel; */ //lo activo cuando este componente lo lleve a otro
  // @Input() dishCategories = new Set()
  // @Output() getProduct: EventEmitter<ProductDetailModel> = new EventEmitter()
  // @Output() filterType: EventEmitter<ProductDetailModel> = new EventEmitter()
  @Output() addToCar: EventEmitter<ProductDetailModel> = new EventEmitter()

  //línea 15-17 y 39-44

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
    .subscribe((response: ProductDetailModel[]) => { 
      // console.log(response, 'dentro de subscribe');
      //.subscribe((response: any) => { 
      
      // this.items = response.products
      
      //this.filter(response)
      
      this.allProducts(response)
      this.filterType('burger')
      // response.forEach((el: ProductDetailModel)=>{
      //   this.products.push(el)
      // })
    })
    // this.getTotal() 
  }
  
allProducts (elem:Array<ProductDetailModel>){
  elem.forEach((el: ProductDetailModel)=>{
    this.products.push(el)
  })
}

  // Se filtra por los 3 tipos de productos: Burger, Drink & Side-Dish
  // filter(elemento: Array<ProductDetailModel>){
  //   elemento.forEach((el: ProductDetailModel)=>{
  //     this.productsTypes.add(el.type)
  //   })
  // }

  filterType(category: any) {
    this.items = this.products.filter((elem: ProductDetailModel) => {
      return elem.type === category;
    })
  }
  
  addItemToCar(product: any){ //este es un evento que voy a enviar al compon. orders-car = OUTPUT
    this.addToCar.emit(product) // luego se agrega el objeto
    console.log(product);
  }
}


