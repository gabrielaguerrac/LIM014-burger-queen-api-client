import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../services/user/users.service';

@Component({
  selector: 'app-form-new-user',
  templateUrl: './form-new-user.component.html',
  styleUrls: ['./form-new-user.component.css']
})
export class FormNewUserComponent implements OnInit {

  @Input() show: boolean = false;
  @Input() user: any;
  @Output() getForm: EventEmitter<boolean> = new EventEmitter();
  @Output() closeForm: EventEmitter<boolean> = new EventEmitter();

  @Output() newUser: EventEmitter<any> = new EventEmitter();

  registerUserForm = new FormGroup({ //esta funcion recibe un objeto que ser'a parte del group
    email:new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    admin: new FormControl(false),
  })
  
  
  constructor(){
    // this.registerUserForm = this.createFormGroup();
    this.user;
  }

  ngOnInit(): void {
  }

  // registerUserForm: FormGroup;

// Funciones para abrir y cerrar formulario
getFormNewUser(elem:boolean){
  this.getForm.emit(elem);
  
}

closeFormNewUser(elem: boolean) {
  this.closeForm.emit(elem);
}      

// Funciones propias de formulario reactivo
onSaveForm() {
  console.log('guardado');
  const newUserData = this.registerUserForm.value;
  this.newUser.emit(newUserData);
  this.registerUserForm.reset();
  this.closeForm.emit();
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