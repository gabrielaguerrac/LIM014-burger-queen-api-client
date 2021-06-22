import { Component , OnInit } from '@angular/core';

import { AuthService } from '../services/auth/auth.service';
import { Form } from '@angular/forms';
import { Token } from '../models/auth';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UsersService } from '../services/user/users.service';
import { UserModel } from '../models/user.model';
import jwtDecode from 'jwt-decode';
import { Observable } from 'rxjs';

import { HttpErrorResponse } from '@angular/common/http';



@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  email= "";
  password="";
  // método que se ejecuta cuando carga un objeto
  constructor(
      private authService: AuthService,
      private route: ActivatedRoute,
      private router: Router,
      private userService: UsersService,
    ){ }
  // método que permite iniciar el componente luego del constructor
  ngOnInit(){}
  redirect(){
    this.router.navigate(['/user']);
}

  public sendCredentials(form: any){
      this.authService.loginUser({email: this.email, password: this.password})  
      .subscribe((response) => {
          console.log(response);
          const token = jwtDecode(response.token)
          console.log(token);
          localStorage.setItem('accessToken', response.token);
          localStorage.getItem('accessToken');
        this.redirect();
        // this.redirect();
      })
      
      form.reset();
  }

 
}
