import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inventory-admin',
  templateUrl: './inventory-admin.component.html',
  styleUrls: ['./inventory-admin.component.css']
})
export class InventoryAdminComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  getFormNewProduct(a: boolean){
    console.log('click en add product')
  }

  //Funciones de tabla inventario
  editProduct(){
    console.log('click en lapicito')
  }

  deleteProduct(){
    console.log('click en tacho')
  }
}
