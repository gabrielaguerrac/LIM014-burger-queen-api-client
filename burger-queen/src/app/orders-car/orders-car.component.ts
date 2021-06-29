import { Component, Input, OnInit } from '@angular/core';
import { IProductsModel, ProductDetailModel } from '../models/product.model';
import { ProductsService } from '../services/product/products.service'

@Component({
  selector: 'orders-car',
  templateUrl: './orders-car.component.html',
  styleUrls: ['./orders-car.component.css']
})
export class OrdersCarComponent implements OnInit {

  @Input() 
  items: Array<ProductDetailModel>
  products: Array<ProductDetailModel>
  

  constructor(private productsService: ProductsService,) {
    this.items = []
    this.products = []
  }

  ngOnInit(): void {
    this.productsService.getAllProducts()
    .subscribe((response: ProductDetailModel[]) => { 
      /* console.log(response, 'dentro de subscribe'); */
      this.items=response
      console.log(this.items, 'Kathy smart');
      
    })
    this.addItemToCar
  }

  allProducts (elem:Array<ProductDetailModel>){
    elem.forEach((el: ProductDetailModel)=>{
      this.products.push(el)
    })
  }

  addItemToCar(product: any){
    this.productsService.getProductsById(product._id)
    .subscribe((response: IProductsModel)=>{
      console.log(response);

    })
  }

  minousOneItem(){

  }
  plusOneItem(){

  }
  trashItem(){
    return this.items;
  }
}
