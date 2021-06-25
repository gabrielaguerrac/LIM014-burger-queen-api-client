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

  /* @Input() products: ProductDetailModel; */ //lo activo cuando este componente lo lleve a otro
  

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

  addItemToCar(){
    console.log('agrega al carrito');
    
  }
}


