import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UsersService } from '../services/user/users.service';

@Component({
  selector: 'app-form-new-user',
  templateUrl: './form-new-user.component.html',
  styleUrls: ['./form-new-user.component.css']
})
export class FormNewUserComponent implements OnInit {

  @Input() show: boolean = false;
  @Output() getForm: EventEmitter<boolean> = new EventEmitter();
  @Output() closeForm: EventEmitter<boolean> = new EventEmitter();

  registerUserForm: FormGroup;
  
  constructor(private usersService: UsersService){
    this.registerUserForm = this.createFormGroup();
  }

  ngOnInit(): void {
  }

// Funciones para abrir y cerrar formulario
getFormNewUser(elem:boolean){
  this.getForm.emit(elem);
}

closeFormNewUser(elem: boolean) {
  this.closeForm.emit(elem);
}      

// Funciones propias de formulario reactivo
createFormGroup(){
  return new FormGroup({ //esta funcion recibe un objeto que ser'a parte del group
    name: new FormControl(''),
    email:new FormControl(''),
    manager: new FormGroup({
      isManager: new FormControl(false),
      isWaiterKit: new FormControl(false)
    })
  })
}

onResetForm(){
  this.registerUserForm.reset();
}

onSaveForm(){
  console.log('guardado');
  
}



}
