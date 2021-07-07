import { Component, OnInit } from '@angular/core';
import { ProductDetailModel } from '../models/product.model';
import { ProductsService } from '../services/product/products.service';

@Component({
  selector: 'app-inventory-admin',
  templateUrl: './inventory-admin.component.html',
  styleUrls: ['./inventory-admin.component.css']
})
export class InventoryAdminComponent implements OnInit {

  product: any
  products: Array<ProductDetailModel>
  show: boolean;
  p: number = 1;

  constructor(private productsService: ProductsService) {
    this.product= null;
    this.products= [];
    this.show= false;
   }

  ngOnInit(): void {
    this.showProducts();
  }

  showProducts(){
    this.productsService.getAllProducts()
    .subscribe((response) => {
      console.log(response);
      this.allProducts(response);
    })
  }
  allProducts (elem:Array<ProductDetailModel>){
    elem.forEach((elem: ProductDetailModel)=>{
      this.products.push(elem);
    })
  } 

  newProduct(productDetail: any){
    //llamar al servicio
    console.log('en user component');
    console.log(productDetail);
    this.productsService.addProduct(productDetail)
    .subscribe((response: any) => {
     this.product = response; // lo q devuelve mockoon
      console.log(this.product);
      this.products.push(this.product);
    })
  }


  //Funcion de modal
  getFormNewProduct(cond: boolean){
    this.show = cond;
  }
  
  closeFormNewProduct(cond:boolean){
    this.show = cond;
  }

  //Funciones de tabla inventario
  preEditProduct(singleProduct: any){
    console.log(singleProduct._id);
    this.productsService.getCurrentProduct(singleProduct._id)
    .subscribe((response:any) => {
      console.log(response);
    })
  }
  editProduct(singleProduct: any){
    // console.log(singleProduct._id);
    // this.productsService.getCurrentProduct(singleProduct._id)
    // .subscribe((response:any) => {
    //   console.log(response);
    // })
  }

  deleteProduct(){
    console.log('click en tacho')
  }

  // modal del edit
  openModalWithData(id: any){
    this.getFormNewProduct(true);

  }

  logoutBarside(){
    console.log('dentro de inventoria')
    localStorage.clear();
    // console.log('accessToken')
    // this.router.navigate(['/login']);
  }
}
