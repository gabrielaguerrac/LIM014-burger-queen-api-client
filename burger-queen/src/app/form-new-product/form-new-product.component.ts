import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductDetailModel } from '../models/product.model';

@Component({
  selector: 'app-form-new-product',
  templateUrl: './form-new-product.component.html',
  styleUrls: ['./form-new-product.component.css']
})
export class FormNewProductComponent implements OnInit {
  @Input() show: boolean= false;
  @Input() dataEdit: ProductDetailModel= {
    _id: '',
    name: '',
    price: 0,
    image: '',
    type: ''
  };
  @Output() getForm: EventEmitter<boolean> = new EventEmitter();
  @Output() closeForm: EventEmitter<boolean> = new EventEmitter();
  @Output() newProduct: EventEmitter<any> = new EventEmitter();

  
  

  registerProductForm = new FormGroup({ //esta funcion recibe un objeto que ser'a parte del group
    // image: new FormControl('', [Validators.required]),
    _id: new FormControl(''),
    name:new FormControl('', [Validators.required]),
    type: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required]),
    image: new FormControl('', [Validators.required]),
  })

  constructor() {
    // this.nuevar={}
   
   }

  ngOnInit(): void {
    
  }

  onSaveForm() {
    console.log('click onsaveform');
    
    console.log(this.dataEdit);
    const newProductData = this.registerProductForm.value;
    console.log(newProductData);
   
    if(!this.dataEdit._id){
      
    this.newProduct.emit(newProductData); //EN EL Padre no est'a mostrandoo
    this.registerProductForm.reset();
    this.closeForm.emit();
    } else {
      //constante con el id y los nuevos datos del form
      //...[]

    }
  }

  //Update campos de form
  updateFormValue(){
  
  }

  // Funciones del modal para abrir y cerrar

  getFormNewProduct(show: boolean){
    this.getForm.emit(show);
  }

  closeFormNewProduct(cond: boolean){
    this.registerProductForm.reset();
    this.closeForm.emit(cond);
  }
}
