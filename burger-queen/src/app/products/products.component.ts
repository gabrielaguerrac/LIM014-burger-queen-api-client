import { Component, Input, OnInit } from '@angular/core';
import { IProductsModel, ProductDetailModel } from '../models/product';
import { ProductsService } from '../services/product/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  /* @Input() productos: ProductDetailModel; */
  productos: ProductDetailModel[] = [
    {
      _id: '1',
      name: 'Coffee',
      price: 3.10,
      // image: '../assets/food/coffee.png',
      type: 'Menú'
      // dateEntry: 
    },
    {
      _id: '2',
      name: 'Milk',
      price: 3.10,
      // image: '../assets/food/coffee.png',
      type: 'Menú'
      // dateEntry: 
    },
    {
      _id: '3',
      name: 'Tea',
      price: 3.10,
      // image: '../assets/food/coffee.png',
      type: 'Menú'
      // dateEntry: 
    }
  ]

  // items: Array<ProductDetailModel>
  // products: Array<ProductDetailModel>

  constructor(
    // private productsService: ProductsService,
  ) { 
    // this.items = []
    // this.products = []
  }

  ngOnInit(): void {
    // this.productsService.getAllProducts()
    // .subscribe((products: any)=>{
    //   this.items=products.products
    // })
  }

}


