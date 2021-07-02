import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-table-client',
  templateUrl: './table-client.component.html',
  styleUrls: ['./table-client.component.css']
})
export class TableClientComponent implements OnInit {
  @Input() show:boolean = false
  @Output() getModalChild: EventEmitter<boolean> = new EventEmitter()
  @Output() closeModalChild: EventEmitter<boolean> = new EventEmitter()

  nameClient: FormControl;

  constructor() { 
    this.nameClient = new FormControl('', [Validators.required]);
    //---Puede servir para ver el cambio de estados en mesas u ordenes
    // this.nameClient.valueChanges
    // .subscribe(value=>{
    //   console.log(value);
    // });
  }

  ngOnInit(): void {
  }

  addClientName(){
    if(this.nameClient.valid){
      console.log(this.nameClient.value);
    }
  }
  getModal(element: boolean){
    this.getModalChild.emit(element)
  }
  closeModal(element: boolean){
    this.closeModalChild.emit(element)
  }
}
