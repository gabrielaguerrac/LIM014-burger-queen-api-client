import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProductsModel, ProductDetailModel } from 'src/app/models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  // private endpoint: string;
  // url = "http://localhost:4201"
  constructor(/* private http: HttpClient */) { 
    // this.endpoint = '/products';
  }

  // getAllProducts (): Observable<ProductDetailModel>{
  //   return this.http.get<Array<ProductDetailModel>>(`${this.url}${this.endpoint}`);
  // }
  
}
