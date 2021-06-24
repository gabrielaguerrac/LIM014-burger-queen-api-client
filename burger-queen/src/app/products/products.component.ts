import { Component, Input, OnInit } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IProductsModel, ProductDetailModel } from '../models/product';
import { ProductsService } from '../services/product/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  /* @Input() productos: ProductDetailModel; */
  // productos: ProductDetailModel[] = [
  //   {
  //     _id: '1',
  //     name: 'Coffee',
  //     price: 3.10,
  //     image: '../assets/food/coffee.png',
  //     type: 'Menú'
  //     // dateEntry: 
  //   },
  //   {
  //     _id: '2',
  //     name: 'Milk',
  //     price: 3.10,
  //     image: '../assets/food/coffee-milk.png',
  //     type: 'Menú'
  //     // dateEntry: 
  //   },
  //   {
  //     _id: '3',
  //     name: 'Tea',
  //     price: 3.10,
  //     image: '../assets/food/tea-buble.png',
  //     type: 'Menú'
  //     // dateEntry: 
  //   }
  // ]

  items: Array<ProductDetailModel>
  products: Array<ProductDetailModel>

  constructor(private productsService: ProductsService,) { 
    this.items = []
    this.products = []
  }

  ngOnInit(): void {
    this.productsService.getAllProducts()
    .subscribe((response: ProductDetailModel[]) => { 
      console.log(response, 'dentro de subscribe');
      response.forEach((el: ProductDetailModel)=>{
        this.products.push(el)
      })
    }) 
  }
}


