import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProductsModel, ProductDetailModel } from 'src/app/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private endpoint: string;
  url = "https://burgerqueenplants.herokuapp.com"
  constructor(private http: HttpClient) { 
    this.endpoint = '/products';
  }

  getAllProducts (): Observable<ProductDetailModel[]>{
    return this.http.get<Array<ProductDetailModel>>(`${this.url}${this.endpoint}`);
  }

  getProductsById(uid: any) {
    return this.http.get<IProductsModel>(`${this.url}${this.endpoint}${uid}`);
  }

  addProduct(newProduct: ProductDetailModel): Observable<ProductDetailModel> {
    return this.http.post<ProductDetailModel>(`${this.url}${this.endpoint}`, newProduct);
  }

  getCurrentProduct(uid: string){
    return this.http.get<ProductDetailModel>(`${this.url}${this.endpoint}/${uid}`)
  }

  
}
