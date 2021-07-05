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

  @Output() newUser: EventEmitter<any> = new EventEmitter();

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
    password: new FormControl(''),
    manager: new FormGroup({
      isManager: new FormControl(false),
      isWaiterKit: new FormControl(false)
    })
  })
}

onResetForm(){
  this.registerUserForm.reset();
}

onSaveForm() {
  console.log('guardado');
  this.newUser.emit();
}
  // this.usersService.addUser({registerUserForm})
  // if(registerUserForm.value._id == null){
  //   //new
  // } else{
  //   //update
  // }


//     this.authService.loginUser({email: this.email, password: this.password})
//     .pipe(
//       catchError((error)=>{
//         console.log('ERROR:', error);
//         return throwError(error);
//       })
//     )  
//     .subscribe((response) => {                
//         const token: any = jwtDecode(response.token);
//         localStorage.setItem('accessToken', response.token);
//         localStorage.getItem('accessToken');         
//       if (token.roles.admin === true) {
//         this.router.navigate(['/user']);
//       } else {
//         this.router.navigate(['/roleselector']);
//       }
//     })   
//     form.reset();
// }
}