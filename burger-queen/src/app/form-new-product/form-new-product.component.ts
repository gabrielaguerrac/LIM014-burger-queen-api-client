import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-new-product',
  templateUrl: './form-new-product.component.html',
  styleUrls: ['./form-new-product.component.css']
})
export class FormNewProductComponent implements OnInit {
  @Input() show: boolean= false;
  @Output() getForm: EventEmitter<boolean> = new EventEmitter();
  @Output() closeForm: EventEmitter<boolean> = new EventEmitter();
  @Output() newProduct: EventEmitter<any> = new EventEmitter();

  registerProductForm = new FormGroup({ //esta funcion recibe un objeto que ser'a parte del group
    // image: new FormControl('', [Validators.required]),
    name:new FormControl('', [Validators.required]),
    type: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required]),
    image: new FormControl('', [Validators.required]),
  })

  constructor() { }

  ngOnInit(): void {
  }

  onSaveForm() {
    console.log('click onsaveform');
    const newProductData = this.registerProductForm.value;
    console.log(newProductData);
    this.newProduct.emit(newProductData);
    this.registerProductForm.reset();
    this.closeForm.emit();
  }

  // Funciones del modal para abrir y cerrar

  getFormNewProduct(show: boolean){
    this.getForm.emit(show);
  }

  closeFormNewProduct(cond: boolean){
    this.closeForm.emit(cond);
  }
}
