import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-table-client',
  templateUrl: './table-client.component.html',
  styleUrls: ['./table-client.component.css']
})
export class TableClientComponent implements OnInit {
  @Input() show:boolean = false
  @Input() nameClient: FormControl;
  @Output() getModalChild: EventEmitter<boolean> = new EventEmitter()
  @Output() closeModalChild: EventEmitter<boolean> = new EventEmitter()
  @Output() getClientName: EventEmitter<any> = new EventEmitter()

  /* nameClient: FormControl; */

  constructor() { 
   this.nameClient = new FormControl('', [Validators.required]);
  }

  ngOnInit(): void {
  }
  
  getName(){
    this.getClientName.emit()
  }
  getModal(element: boolean){
    this.getModalChild.emit(element)
  }
  closeModal(element: boolean){
    this.closeModalChild.emit(element)
  }
}
